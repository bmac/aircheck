import Recording from 'aircheck/services/recording';
import chat from 'aircheck/services/chat';




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

test('join room should return a user promise that fulfills with a room object', 6, function() {
    var stream = this.stub(), videoSrc = this.stub();
    this.stub(rtc, "connect");
    this.stub(rtc, "createStream", function(config, cb) {
        cb(stream);
    });
    this.stub(URL, 'createObjectURL').returns(videoSrc);
    sinon.stub(Recording, 'create');
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
        Recording.create.restore();
    });
    stop();
});
