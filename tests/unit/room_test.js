import Room from 'aircheck/models/room';

var rtc = window.rtc;
var room, openDataChannel, closedDataChannel;
module("Unit - Model - Room", {
    setup: function() {
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
    }
});

test('Room#send', 2, function() {
    room.send('foo');
    equal(room.messages.length, 1);
    var arg = openDataChannel.send.getCall(0).args[0];

    ok(/foo/.test(arg), 'should send foo in the message');
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
    equal(prefix.nick, 'user nick');
    equal(prefix.server, 'room name');
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

test('Room#_parsePrivMsg', 5, function() {
    var ircMsg = {
        prefix: {
            nick: 'nick',
            server: 'server',
            user: 'user'
        },
        command: 'PRIVMSG',
        parameters: ['room name', 'I am a message']
    };
    room._parsePrivMsg(ircMsg);
    equal(room.messages.length, 1);
    equal(room.messages[0].msg, 'I am a message');
    equal(room.messages[0].nick, 'nick');
    equal(room.messages[0].type, 'msg');
    ok(room.messages[0].time);
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

