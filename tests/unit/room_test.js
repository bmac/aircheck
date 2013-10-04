import Room from 'aircheck/models/room';
import Recording from 'aircheck/services/recording';

var rtc = window.rtc;
var room, openDataChannel, closedDataChannel;
var AudioContext = window.AudioContext || window.webkitAudioContext;
module("Unit - Model - Room", {
    setup: function() {
        sinon.stub(Recording, 'create');
        //sinon.stub(Date, 'now').returns('Date.now');
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
        Recording.create.restore();
    }
});

test('Room#send', 2, function() {
    room.send('foo');
    equal(room.messages.length, 1);
    var arg = openDataChannel.send.getCall(0).args[0];

    ok(/foo/.test(arg), 'should send foo in the message');
});

test('Room#setNick', 5, function() {
    room.setNick('new nick');
    equal(room.messages.length, 1);
    var arg = openDataChannel.send.getCall(0).args[0];
    //:user_nick@room_name NICK new_nick
    // or
    //:user_nick asdfe-asdfda-asdfasd-32f32f@room_name NICK new_nick
    var msg = JSON.parse(arg);
    equal(msg.nick, 'new nick');
    equal(msg.msg, 'user nick is now known as new nick');
    equal(msg.type, 'NICK');
    equal(msg.id, null);
});


test('Room#_createIrcMsg', 4, function() {
    var ircMsg = room._createIrcMsg('foo');
    equal(ircMsg.nick, 'user nick');
    equal(ircMsg.msg, 'foo');
    equal(ircMsg.type, 'MSG');
    equal(ircMsg.id, null);
});

test('Room#_createIrcMsg, type arg', 1, function() {
    var ircMsg = room._createIrcMsg('foo', 'NICK');
    equal(ircMsg.type, 'NICK');
});

test('Room#_sendIrcMsg', 2, function() {
    var ircMsg = room._createIrcMsg('foo');
    room._sendIrcMsg(ircMsg);
    ok(openDataChannel.send.called, 'should call send on all open data channels');
    equal(closedDataChannel.send.called, false, 'should not call send on all not open data channels');
});

test('Room#_sendIrcMsg w socketId arg', 1, function() {
    var ircMsg = room._createIrcMsg('foo');
    room._sendIrcMsg(ircMsg, 'closed');
    equal(closedDataChannel.send.called, false, 'should call send on the data channel of the id');
});


test('Room#_parseUserMsg', 1, function() {
    var peer = {
        socketId: 'peer1'
    };
    room.peers.pushObject(peer);

    var msg = room._createIrcMsg('', 'USER');
    msg.userId = 'peer1';
    msg.nick = 'imports';

    room._parseUserMsg(msg);

    equal(peer.nick, 'imports');
});

test('Room#_parseNickMsg', 1, function() {
    var peer = {
        socketId: 'peer1'
    };
    room.peers.pushObject(peer);

    var msg = room._createIrcMsg('', 'USER');
    msg.userId = 'peer1';
    msg.nick = 'bb&b';
    
    room._parseNickMsg(msg);

    equal(peer.nick, 'bb&b');
});


test('Room#_parseChatMsg', 5, function() {
    var ircMsg = {
        nick: 'nick',
        msg: 'I am a message',
        type: 'MSG',
        time: Date.now()
    };
    room._parseChatMsg(ircMsg);
    equal(room.messages.length, 1);
    equal(room.messages[0].msg, 'I am a message');
    equal(room.messages[0].nick, 'nick');
    equal(room.messages[0].type, 'MSG');
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
    var msg = JSON.stringify(room._createIrcMsg('foo', 'USER'));
    rtc.fire('data stream data', {}, msg);
    ok(room._parseUserMsg.called, '_parseUserMsg was not called');
});

test('rtc "data stream data" event MSG msg', 1, function() {
    this.stub(room, '_parseChatMsg');
    var msg = JSON.stringify(room._createIrcMsg('foo', 'MSG'));
    rtc.fire('data stream data', {}, msg);
    ok(room._parseChatMsg.called, '_parseChatMsg was not called');
});

test('rtc "data stream data" event NICK msg', 1, function() {
    this.stub(room, '_parseNickMsg');
    var msg = JSON.stringify(room._createIrcMsg('foo', 'NICK'));
    rtc.fire('data stream data', {}, msg);
    ok(room._parseNickMsg.called, '_parseNickMsg was not called');
});
