import Recording from 'aircheck/services/recording';

var rtc = window.rtc;
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
    this.recording = Recording.create(this.user.stream);
    this._setupEvents();
};

/*
 * Public API
 */

Room.prototype.send = function(msg) {
    var ircMsg = this._createIrcMsg(msg);
    // send the message to all peers
    this._sendIrcMsg(ircMsg);
};

Room.prototype.setNick = function(newNick) {
    var oldNick = this.user.nick;
    this.user.nick = newNick;
    var msg = [oldNick, 'is now known as', newNick].join(' ');
    var ircMsg = this._createIrcMsg(msg, 'NICK');
    // send the message to all peers
    this._sendIrcMsg(ircMsg);
};

/*
 * Priavte API
 */
Room.prototype._createIrcMsg = function(msg, type) {
    return {
        nick: this.user.nick,
        msg: msg,
        time: Date.now(),
        type: type || 'MSG',
        userId: rtc._me
    };
};

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
        channel.send(JSON.stringify(ircMsg));
    });
    this.messages.pushObject(ircMsg);
};

Room.prototype._parseUserMsg = function(ircMsg) {
    var remoteUser = this.peers.find(function(remote) {
        return remote.socketId === ircMsg.userId;
    });
    Ember.set(remoteUser, 'nick', ircMsg.nick);
};

Room.prototype._parseNickMsg = function(ircMsg) {
    var remoteUser = this.peers.find(function(remote) {
        return remote.socketId === ircMsg.userId;
    });
    this.messages.pushObject(ircMsg);
    Ember.set(remoteUser, 'nick', ircMsg.nick);
};

Room.prototype._parseChatMsg = function(ircMsg) {
    this.messages.pushObject(ircMsg);
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
        var ircMsg = room._createIrcMsg('', 'USER');
        room._sendIrcMsg(ircMsg, socketId);
    });

    rtc.on('disconnect stream', function(socketId) {
        var remoteObj = room.peers.find(function(obj) {
            return obj.socketId === socketId;
        });

        room.peers.removeObject(remoteObj);
    });

    rtc.on('data stream data', function(data, msg) {
        var ircMsg = JSON.parse(msg);
        // Is this a good idea?
        ircMsg.time = Date.now();
        switch (ircMsg.type) {
        case 'MSG':
            room._parseChatMsg(ircMsg);
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

export default Room;
