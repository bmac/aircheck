import Room from 'aircheck/models/room';

var RSVP = Ember.RSVP;

var config = {
    signalServer: 'ws://localhost:8001/'
};

var rtc = window.rtc;

var fixture = [
    {
        nick: 'foo',
        socketId: 'some socket id',
        stream: 'some stream',
        videoSrc: 'some video src'
    },
    {
        nick: 'bar',
        socketId: 'some socket id',
        stream: 'some stream',
        videoSrc: 'some video src'
    },
    {
        nick: 'baz',
        socketId: 'some socket id',
        stream: 'some stream',
        videoSrc: 'some video src'
    },
    {
        nick: 'foo1',
        socketId: 'some socket id',
        stream: 'some stream',
        videoSrc: 'some video src'
    },
    {
        nick: 'bar1',
        socketId: 'some socket id',
        stream: 'some stream',
        videoSrc: 'some video src'
    },
    {
        nick: 'baz1',
        socketId: 'some socket id',
        stream: 'some stream',
        videoSrc: 'some video src'
    },
    {
        nick: 'bar2',
        socketId: 'some socket id',
        stream: 'some stream',
        videoSrc: 'some video src'
    },
    {
        nick: 'baz2',
        socketId: 'some socket id',
        stream: 'some stream',
        videoSrc: 'some video src'
    }
];

// This should return a promise
var joinRoom = function(nick, roomName) {
    rtc.connect(config.signalServer, roomName);

    return createStream().then(function(streamObject) {
        var room = new Room({
            name: roomName,
            user: {
                nick: nick,
                videoSrc: streamObject.videoSrc,
                stream: streamObject.stream
            }
        });
        // testing code, so I can load video elements without melting my lap
        // room.peers.pushObjects(fixture);

        return room;
    });
};

var createStream = function() {
    var promise = new Ember.RSVP.Promise(function(resolve, reject) {
        rtc.createStream({video:true, audio:true}, function(stream){
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
