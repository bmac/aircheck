import Recording from 'aircheck/services/recording';

var rtc = window.rtc;
var parser = new IRCProtocol.Parser();
var serialiser = new IRCProtocol.Serialiser();

/*
// The structure of a room object
var room = {
    user: {
        nick: 'some nick',
        socketId: 'some socket id',
        stream: 'some stream',
        videoSrc: 'some video src'
    },
    name: 'name of channel',
    peers: [{
        nick: 'some nick',
        socketId: 'some socket id',
        stream: 'some stream',
        videoSrc: 'some video src'
    }],
    messages: []
};
*/

var Room = function(config) {
    this.peers = [];
    this.messages = [];
    this.user = {};
    this.name = '';
    Ember.merge(this, config);
    this.name = Room._sanitizeName(this.name);
    this.user.nick = Room._sanitizeName(this.user.nick);
    this._setupEvents();
    this._setupRecorder();
};

/*
 * Public API
 */

Room.prototype.send = function(msg) {
    var ircMsg = {
        prefix: this._prefix(),
        command: 'PRIVMSG',
        parameters: [this.name, msg]
    };
    // send the message to all peers
    this._sendIrcMsg(ircMsg);
    // store the message locally
    this.messages.pushObject({
        nick: ircMsg.prefix.nick,
        msg: ircMsg.parameters[1],
        time: Date.now(),
        type: 'msg'
    });
};

Room.prototype.setNick = function(nick) {
    nick = Room._sanitizeName(nick);
    var ircMsg = {
        prefix: this._prefix(),
        command: 'NICK',
        parameters: [nick]
    };
    // send the message to all peers
    this._sendIrcMsg(ircMsg);
    this.user.nick = nick;
    // store the message locally
    this.messages.pushObject({
        nick: ircMsg.prefix.nick,
        msg: [ircMsg.prefix.nick, 'is now known as', ircMsg.parameters[0]].join(' '),
        time: Date.now(),
        type: 'nick'
    });
};

/*
 * Priavte API
 */

Room.prototype._sendIrcMsg = function(ircMsg, socketId) {
    var channels = [];
    if (socketId) {
        channels = [rtc.dataChannels[socketId]];
    } else {
        // Currently we only support 1 room so rtc.dataChannels should only
        // contain users from our room
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

Room.prototype._prefix = function() {
    return {
        nick: this.user.nick,
        server: this.name,
        user: rtc._me
    };
};

Room.prototype._parseUserMsg = function(ircMsg) {
    var remoteUser = this.peers.find(function(remote) {
        return remote.socketId === ircMsg.prefix.user;
    });
    Ember.set(remoteUser, 'nick', ircMsg.prefix.nick);
};

Room.prototype._parseNickMsg = function(ircMsg) {
    var remoteUser = this.peers.find(function(remote) {
        return remote.socketId === ircMsg.prefix.user;
    });
    this.messages.pushObject({
        nick: ircMsg.prefix.nick,
        msg: [ircMsg.prefix.nick, 'is now known as', ircMsg.parameters[0]].join(' '),
        time: Date.now(),
        type: 'nick'
    });
    Ember.set(remoteUser, 'nick', ircMsg.parameters[0]);
};

Room.prototype._parsePrivMsg = function(ircMsg) {
    //if (ircMsg.parameters[0] === this.name) {
    this.messages.pushObject({nick: ircMsg.prefix.nick, msg: ircMsg.parameters[1], time: Date.now(), type: 'msg'});
    //}
};

Room.prototype._setupRecorder = function() {
    this.recording = new Recording(this.user.stream);
};

Room.prototype._setupEvents = function() {
    var room = this;
    rtc.on('add remote stream', function(stream, socketId) {
        room.peers.pushObject({
            nick: '',
            stream: stream,
            socketId: socketId,
            videoSrc: URL.createObjectURL(stream)
        });
    });

    rtc.on('data stream open', function(stream, socketId) {
        var ircMsg = {prefix: room._prefix(), command: 'USER', parameters: []};
        room._sendIrcMsg(ircMsg, socketId);
    });

    rtc.on('disconnect stream', function(socketId) {
        var remoteObj = room.peers.find(function(obj) {
            return obj.socketId === socketId;
        });

        room.peers.removeObject(remoteObj);
    });

    rtc.on('data stream data', function(data, msg) {
        var ircMsg = parser.parse(msg);
        switch (ircMsg.command) {
        case 'PRIVMSG':
            room._parsePrivMsg(ircMsg);
            break;
            // respont to WHOIS

            // respond to NICK
        case 'NICK':
            room._parseNickMsg(ircMsg);
            break;
            // respond to USER
        case 'USER':
            room._parseUserMsg(ircMsg);
            break;
        }
    });
};

Room._sanitizeName = function(nick) {
    return nick.replace(/\s+/g, '_');
};

export default Room;
