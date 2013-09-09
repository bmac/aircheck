import chat from 'aircheck/helpers/chat';

module("Unit - chat");
// todo get a real stubing library
var rtc = window.rtc;
rtc.connect = function(){};
rtc.createStream = function(config, cb){  
    return $.when({name: 'my room',
            // myStream: createStream(),
            otherVideos: []});
};

// asyncTest('join room', 2, function() {
//     var roomPromise = chat.joinRoom('my room');

//     roomPromise.then(function(room) {
//         equal(room.roomName, 'my room');
//         deepEqual(room.otherVideos, []);
//         start();
//     });
// });
