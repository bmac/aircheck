var RSVP = Ember.RSVP;

var config = {
    signalServer: 'ws://localhost:8001/'
};

var rooms = {};
var remotes = [];
var messages = [];

var rtc = window.rtc;


var parser = new IRCProtocol.Parser();
var serialiser = new IRCProtocol.Serialiser();

// This should return a promise
var joinRoom = function(nick, roomName) {
    var validNick = nick.replace(/\s+/g, '_');
    rtc.connect(config.signalServer, roomName);
    chat._prefix = {nick: validNick,    
                    server: roomName};
    chat.roomName = roomName;

    return createStream().then(function(streamObject) {
        var room = {
            nick: nick,
            name: roomName,
            myStream: streamObject,
            otherVideos: remotes,
            messages: messages
        };
        chat._prefix.user = rtc._me;

        rooms[room.name] = room;
        return room;
    });
};

var createStream = function() {
    var promise = new Ember.RSVP.Promise(function(resolve, reject) {
        rtc.createStream({video:false, audio:true}, function(stream){
            var objUrl = URL.createObjectURL(stream);
            var streamObject = {
                videoSrc: objUrl,
                stream: stream
            };
            resolve(streamObject);
        });
    });
    return promise;
};

rtc.on('add remote stream', function(stream, socketId) {
    remotes.pushObject({
        stream: stream,
        socketId: socketId,
        videoSrc: URL.createObjectURL(stream)
    });
    var ircMsg = {prefix: chat._prefix, command: 'USER', parameters: []};
    sendIrcMsg(ircMsg, socketId);
});

rtc.on('data stream open', function(stream, socketId) {
    var ircMsg = {prefix: chat._prefix, command: 'USER', parameters: []};
    sendIrcMsg(ircMsg, socketId);
});

var sendNick = function(nick) {
    var ircMsg = {prefix: chat._prefix, command: 'NICK', parameters: [nick]};
};

rtc.on('disconnect stream', function(socketId) {
    var remoteObj = remotes.find(function(obj) {
        return obj.socketId === socketId;
    });

    remotes.removeObject(remoteObj);
});

var sendAll = function(msg) {
    var ircMsg = {prefix: chat._prefix, command: 'PRIVMSG', parameters: [chat.roomName, msg]};
    pushMessage(ircMsg); // stores it locally
    sendIrcMsg(ircMsg); // sends the message to all peers
};

var sendIrcMsg = function(ircMsg, socketId) {
    var channels = [];
    if (socketId) {
        channels = [rtc.dataChannels[socketId]];
    } else {
        channels = Object.keys(rtc.dataChannels).map(function(key) {
            return rtc.dataChannels[key];
        });
    }
    channels.filter(function(channel) {
        return channel.readyState === 'open';
    }).forEach(function(channel) {
        channel.send(serialiser.format_message(ircMsg));
    });
};

rtc.on('data stream data', function(data, msg) {
    var ircMsg = parser.parse(msg);
    switch (ircMsg.command) {
    case 'PRIVMSG':
        if (ircMsg.parameters[0] === chat.roomName) {
            pushMessage(ircMsg);
        }
        break;
        // respont to WHOIS

        // respond to NICK

        // respond to USER
    case 'USER':
        userJoined(ircMsg);
        break;
    }
});

var userJoined = function(ircMsg) {
    var remoteUser = remotes.find(function(remote) {
        return remote.socketId === ircMsg.prefix.user;
    });
    Ember.set(remoteUser, 'nick', ircMsg.prefix.nick);
};

var pushMessage = function(ircMsg) {
    messages.pushObject({nick: ircMsg.prefix.nick, msg: ircMsg.parameters[1], time: Date.now(), type: 'msg'});
};

var chat = {
    joinRoom: joinRoom,
    sendAll: sendAll,
    _remotes: remotes,
    _messages: messages
};

export default chat;
