window.aircheck = window.aircheck || {};
window.aircheck.chat = (function() {
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
                myStream: createStream(),
                otherVideos: remotes
            };

            rooms[room.name] = room;

            return room;
        });
    };

    var createStream = function() {
        var promise = new RSVP.Promise(function(resolve, reject){
            rtc.createStream({video: true, audio:true}, function(stream){
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


    return {
        joinRoom: joinRoom
    };
}());
