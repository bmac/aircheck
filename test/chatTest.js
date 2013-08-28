test( 'chat', 2, function() {
    ok( aircheck, 'aircheck is defined');
    ok( aircheck.chat, 'aircheck is defined');
});



// todo get a real stubing library
rtc.connect = function(){};
rtc.createStream = function(config, cb){  };
test('join room', 2, function() {
    var roomPromise = chat.joinRoom('my room');

    roomPromise.then(function(room) {
        equal(room.roomName, 'my room');
        deepEqual(room.otherVideos, []);
    });
});
