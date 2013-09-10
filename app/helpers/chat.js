var RSVP = Ember.RSVP;

var config = {
    signalServer: 'ws://localhost:8001/'
};

var rooms = {};
var remotes = [];

var rtc = window.rtc;

// This should return a promise
var joinRoom = function(roomName) {
    rtc.connect(config.signalServer, roomName);
    return createStream().then(function(streamObject) {
        var room = {
            name: roomName,
            myStream: streamObject,
            otherVideos: remotes
        };

        rooms[room.name] = room;
        return room;
    });
};

var createStream = function() {
    var deferred = $.Deferred();
    rtc.createStream({video:true, audio:true}, function(stream){
        var objUrl = URL.createObjectURL(stream);
        var streamObject = {
            videoSrc: objUrl,
            stream: stream
        };
        deferred.resolve(streamObject);
    });

    return deferred.promise();
};

rtc.on('add remote stream', function(stream, socketId) {
    remotes.pushObject({
        stream: stream,
        socketId: socketId,
        videoSrc: URL.createObjectURL(stream)
    });
});

rtc.on('disconnect stream', function(socketId) {
    var remoteObj = remotes.find(function(obj) {
        return obj.socketId === socketId;
    });

    remotes.removeObject(remoteObj);
});

// var sendAll = function(msg) {
//     Object.keys(rtc.dataChannels).forEach(function(key) {
//         rtc.dataChannels[key].send(msg);
//     });
// };

var chat = {
    joinRoom: joinRoom,
    _remotes: remotes
};

export default chat;