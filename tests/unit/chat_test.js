import chat from 'aircheck/helpers/chat';

module("Unit - chat");
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
