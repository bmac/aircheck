import chat from 'aircheck/helpers/chat';

module("Unit - chat", {
    setup: function() {
        chat._remotes.clear();
    }
});
// todo get a real stubing library
var rtc = window.rtc;
rtc.connect = function(){};
rtc.createStream = function(config, cb){
    var stream = {};
    cb(stream);
};
URL.createObjectURL = function() {};

asyncTest('join room', 2, function() {
    var roomPromise = chat.joinRoom('my room');

    roomPromise.then(function(room) {
        equal(room.name, 'my room');
        deepEqual(room.otherVideos, []);
        start();
    });
});

test('remote user added', 1, function() {
    var stream = {},
        socketId = '12345',
        videoSrc = 'videoSrc';
    URL.createObjectURL = function() {return videoSrc;};

    rtc.fire('add remote stream', stream, socketId);
    deepEqual(chat._remotes[0], {
        stream: stream,
        socketId: socketId,
        videoSrc: videoSrc
    });
});

test('remote user left', 2, function() {
    var stream = {},
        socketId = '12345';

    chat._remotes.push({
        socketId: socketId
    });

    equal(chat._remotes.length, 1);
    rtc.fire('disconnect stream', socketId);
    equal(chat._remotes.length, 0);
});
