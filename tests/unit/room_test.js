import Room from 'aircheck/models/room';

var rtc = window.rtc;
var room, openDataChannel, closedDataChannel;
var AudioContext = window.AudioContext || window.webkitAudioContext;
module("Unit - Model - Room", {
    setup: function() {
        sinon.stub(Room.prototype, '_setupRecorder');

        room = new Room({
            name: 'room name',
            user: {
                nick: 'user nick',
                videoSrc: 'videoSrc',
                stream: 'stream'
            }
        });
        openDataChannel = {
            readyState: 'open',
            send: sinon.spy()
        };
        closedDataChannel = {
            readyState: 'connecting',
            send: sinon.spy()
        };
        rtc.dataChannels['open'] = openDataChannel;
        rtc.dataChannels['closed'] = closedDataChannel;
    },
    teardown: function() {
        rtc.dataChannels['open'] = null;
        rtc.dataChannels['closed'] = null;
        rtc._events = {};
        Room.prototype._setupRecorder.restore();
    }
});

test('Room#send', 2, function() {
    room.send('foo');
    equal(room.messages.length, 1);
    var arg = openDataChannel.send.getCall(0).args[0];

    ok(/foo/.test(arg), 'should send foo in the message');
});

test('Room#setNick', 2, function() {
    room.setNick('new nick');
    equal(room.messages.length, 1);
    var arg = openDataChannel.send.getCall(0).args[0];
    //:user_nick@room_name NICK new_nick
    // or
    //:user_nick asdfe-asdfda-asdfasd-32f32f@room_name NICK new_nick
    ok(/:user_nick[^@]*@room_name NICK new_nick/.test(arg));
});

test('Room#_sendIrcMsg', 2, function() {
    var ircMsg = {
        prefix: {
            nick: 'nick',
            server: 'server',
            user: 'user'
        },
        command: 'asdf',
        parameters: []
    };
    room._sendIrcMsg(ircMsg);
    ok(openDataChannel.send.called, 'should call send on all open data channels');
    equal(closedDataChannel.send.called, false, 'should not call send on all not open data channels');
});

test('Room#_sendIrcMsg w socketId arg', 1, function() {
    var ircMsg = {
        prefix: {
            nick: 'nick',
            server: 'server',
            user: 'user'
        },
        command: 'asdf',
        parameters: []
    };
    room._sendIrcMsg(ircMsg, 'closed');
    equal(closedDataChannel.send.called, false, 'should call send on the data channel of the id');
});


test('Room#_prefix', 3, function() {
    rtc._me = 'user socketId';
    var prefix = room._prefix();
    equal(prefix.nick, 'user_nick');
    equal(prefix.server, 'room_name');
    equal(prefix.user, 'user socketId');
    rtc._me = null;
});

test('Room#_parseUserMsg', 1, function() {
    var peer = {
        socketId: 'peer1'
    };
    room.peers.pushObject(peer);
    room._parseUserMsg({
        prefix: {
            user: 'peer1',
            nick: 'imports'
        }
    });

    equal(peer.nick, 'imports');
});

test('Room#_parseNickMsg', 1, function() {
    var peer = {
        socketId: 'peer1'
    };
    room.peers.pushObject(peer);
    room._parseNickMsg({
        prefix: {
            user: 'peer1',
            nick: 'imports'
        },
        parameters: ['bb&b']
    });

    equal(peer.nick, 'bb&b');
});


test('Room#_parsePrivMsg', 5, function() {
    var ircMsg = {
        prefix: {
            nick: 'nick',
            server: 'server',
            user: 'user'
        },
        command: 'PRIVMSG',
        parameters: ['room_name', 'I am a message']
    };
    room._parsePrivMsg(ircMsg);
    equal(room.messages.length, 1);
    equal(room.messages[0].msg, 'I am a message');
    equal(room.messages[0].nick, 'nick');
    equal(room.messages[0].type, 'msg');
    ok(room.messages[0].time);
});


test('Room#_setupRecorder', 3, function() {
    // TODO this is an ugly test. Look at moving this logic out of the room model
    room._setupRecorder.restore();
    var mediaStream = 'mediaStream';
    var recorderObject = {
        record: this.spy()
    };
    this.stub(AudioContext.prototype, 'createMediaStreamSource').returns(mediaStream);
    this.stub(window, 'Recorder').returns(recorderObject);

    var room2 = new Room({
        name: 'room name',
        user: {
            nick: 'user nick',
            videoSrc: 'videoSrc',
            stream: 'stream'
        }
    });
    ok(AudioContext.prototype.createMediaStreamSource.calledWith('stream'));
    ok(window.Recorder.calledWith(mediaStream));
    ok(recorderObject.record.called);
    sinon.stub(Room.prototype, '_setupRecorder');
});

test('Room#exportWAV', 1, function() {
    // TODO this is an ugly test. Look at moving this logic out of the room model
    var blob = 'blob';
    room._rec = {
        exportWAV: function(cb) {
            cb(blob);
        }
    };

    stop();
    Ember.run(function() {
        room.exportWAV().then(function(b) {
            start();
            equal(b, blob);
        });
    });
});


test('rtc "add remote stream" event', 3, function() {
    var stream = this.stub(), socketId = 'socketId';
    this.stub(URL, 'createObjectURL');
    rtc.fire('add remote stream', stream, socketId);
    equal(room.peers.length, 1);
    equal(room.peers[0].stream, stream);
    equal(room.peers[0].socketId, socketId);
});

test('rtc "data stream open" event', 1, function() {
    this.stub(room, '_sendIrcMsg');
    var stream = this.stub(), socketId = 'open';
    rtc.fire('data stream open', stream, socketId);
    ok(room._sendIrcMsg.called);
});

test('rtc "disconnect stream" event', 1, function() {
    var socketId = 'socketId';
    room.peers.pushObject({
        socketId: socketId
    });
    rtc.fire('disconnect stream', socketId);
    equal(room.peers.length, 0);
});

test('rtc "data stream data" event USER msg', 1, function() {
    this.stub(room, '_parseUserMsg', function(){});
    rtc.fire('data stream data', {}, ':Captain_Penguin!52f81e4f-22d9-dced-e463-a5fa58cd4b44@asdf USER ');
    ok(room._parseUserMsg.called, '_parseUserMsg was not called');
});

test('rtc "data stream data" event PRIVMSG msg', 1, function() {
    this.stub(room, '_parsePrivMsg');
    rtc.fire('data stream data', {}, ':Darth_Lobster!5d373249-6cd5-7d1f-ce40-ba6409bb3212@asdf PRIVMSG asdf asfd');
    ok(room._parsePrivMsg.called, '_parsePrivMsg was not called');
});

test('rtc "data stream data" event NICK msg', 1, function() {
    this.stub(room, '_parseNickMsg');
    rtc.fire('data stream data', {}, ':user_nick@asdf NICK new_nick');
    ok(room._parseNickMsg.called, '_parseNickMsg was not called');
});
