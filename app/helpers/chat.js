import Room from 'aircheck/models/room';

var RSVP = Ember.RSVP;

var config = {
    signalServer: 'ws://localhost:8001/'
};

var rtc = window.rtc;

// This should return a promise
var joinRoom = function(nick, roomName) {
    var validNick = nick.replace(/\s+/g, '_');
    rtc.connect(config.signalServer, roomName);

    return createStream().then(function(streamObject) {
        var room = new Room({
            name: roomName,
            user: {
                nick: validNick,
                videoSrc: streamObject.videoSrc,
                stream: streamObject.stream
            }
        });
        return room;
    });
};

var createStream = function() {
    var promise = new Ember.RSVP.Promise(function(resolve, reject) {
        rtc.createStream({video:false, audio:true}, function(stream){
            var objUrl = URL.createObjectURL(stream);
            var streamObject = {
                videoSrc: objUrl,
                stream: stream
            };
            resolve(streamObject);
        });
    });
    return promise;
};

var chat = {
    joinRoom: joinRoom
};

export default chat;
