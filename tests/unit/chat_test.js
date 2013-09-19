import chat from 'aircheck/helpers/chat';


Ember.RSVP.configure('onerror', function(e) {
  start();
  ok(false, e);
});

// Notes. Turn off Ember.testing
// Isolate unit tests and other tests? App.reset()
// Turn off setTimeout stubbing in sinon
// set an on error for rsvp to fail the tests.

module("Unit - chat", {
    setup: function() {
        Ember.testing = false;
    },
    teardown: function() {
        Ember.testing = true;
    }
});

var rtc = window.rtc;

test('join room should return a user promise that fulfills with a ', 6, function() {
    var stream = this.stub(), videoSrc = this.stub();
    this.stub(rtc, "connect");
    this.stub(rtc, "createStream", function(config, cb) {
        cb(stream);
    });
    this.stub(URL, 'createObjectURL').returns(videoSrc);
    var nick = 'nick', roomName = 'my room';

    var roomPromise = chat.joinRoom(nick, roomName);
    roomPromise.then(function(room) {
        start();
        ok(room.name, 'room object should have a name');
        equal(room.user.nick, nick, 'room.user object should have a nick');
        equal(room.user.stream, stream, 'room.user object should have a stream');
        equal(room.user.videoSrc, videoSrc, 'room.user object should have a videoSrc');
        deepEqual(room.messages, []);
        deepEqual(room.peers, []);
    });
    stop();
});

// test('remote user added', 1, function() {
//     var stream = {},
//         socketId = '12345',
//         videoSrc = 'videoSrc';
//     this.stub(URL, 'createObjectURL').returns(videoSrc);

//     rtc.fire('add remote stream', stream, socketId);
//     deepEqual(chat._remotes[0], {
//         stream: stream,
//         socketId: socketId,
//         videoSrc: videoSrc
//     });
// });

// test('remote user left', 2, function() {
//     var stream = {},
//         socketId = '12345';

//     chat._remotes.push({
//         socketId: socketId
//     });

//     equal(chat._remotes.length, 1);
//     rtc.fire('disconnect stream', socketId);
//     equal(chat._remotes.length, 0);
// });
