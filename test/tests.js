test( 'chat', 2, function() {
  ok( aircheck, 'aircheck is defined');
  ok( aircheck.chat, 'aircheck.chat is defined');
});



// todo get a real stubing library
rtc.connect = function(){};
rtc.createStream = function(config, cb){  };
test('join room', 2, function() {
    var room = chat.joinRoom('my room');

    equal(room.roomName, 'my room');
    deepEqual(room.otherVideos, []);
});
