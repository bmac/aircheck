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
