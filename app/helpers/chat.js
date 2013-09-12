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
    rtc.connect(config.signalServer, roomName);
    chat._prefix = {nick: nick,
                    user: rtc._me,
                    server: roomName};
    chat.roomName = roomName;

    return createStream().then(function(streamObject) {
        var room = {
            name: roomName,
            myStream: streamObject,
            otherVideos: remotes,
            messages: messages
        };

        rooms[room.name] = room;
        return room;
    });
};

var createStream = function() {
    var deferred = $.Deferred();
    rtc.createStream({video:true, audio:true}, function(stream){
        var objUrl = URL.createObjectURL(stream);
        var streamObject = {
            videoSrc: objUrl,
            stream: stream
        };
        deferred.resolve(streamObject);
    });

    return deferred.promise();
};

rtc.on('add remote stream', function(stream, socketId) {
    remotes.pushObject({
        stream: stream,
        socketId: socketId,
        videoSrc: URL.createObjectURL(stream)
    });
});

rtc.on('disconnect stream', function(socketId) {
    var remoteObj = remotes.find(function(obj) {
        return obj.socketId === socketId;
    });

    remotes.removeObject(remoteObj);
});

var sendAll = function(msg) {
    var ircMsg = serialiser.format_message({prefix: chat._prefix, command: 'PRIVMSG', parameters: [chat.roomName, msg]});
    var channels = Object.keys(rtc.dataChannels).map(function(key) {
        return rtc.dataChannels[key];
    });
    channels.filter(function(channel) {
        return channel.readyState === 'open';
    }).forEach(function(channel) {
        channel.send(ircMsg);
    });
};

rtc.on('data stream data', function(data, msg) {
    var ircMsg = parser.parse(msg);
    if (ircMsg.command === 'PRIVMSG' && ircMsg.parameters[0] === chat.roomName) {
        messages.pushObject({nick: ircMsg.prefix.nick, msg: ircMsg.parameters[1], time: Date.now()});
    }
});

var chat = {
    joinRoom: joinRoom,
    sendAll: sendAll,
    _remotes: remotes,
    _messages: messages
};

export default chat;
