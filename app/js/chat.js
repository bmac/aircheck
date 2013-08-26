(function() {
    var chat = {
        signalServer: 'ws://localhost:8001/'
    };

    var rtc = window.rtc;

    chat.joinRoom = function(roomName) {
        rtc.connect(chat.signalServer, roomName);
        return {
            roomName: roomName,
            myStream: chat.createStream(),
            otherVideos: chat.remotes
        };
    };

    chat.createStream = function() {
        var streamObject = Ember.Object.create();
        rtc.createStream({video: true, audio:true}, function(stream){
            var objUrl = window.URL.createObjectURL(stream);
            streamObject.set('videoSrc', objUrl);
            streamObject.set('stream', stream);
        });
        return streamObject;
    };

    chat.remotes = [];

    rtc.on('add remote stream', function(stream, socketId) {
        chat.remotes.pushObject({
            stream: stream,
            socketId: socketId,
            videoSrc: URL.createObjectURL(stream)
        });
    });

    rtc.on('disconnect stream', function(socketId) {
        var remoteObj = chat.remotes.find(function(obj) {
            return obj.socketId === socketId;
        });

        chat.remotes.removeObject(remoteObj);
    });

    chat.sendAll = function(msg) {
        Object.keys(rtc.dataChannels).forEach(function(key) {
            rtc.dataChannels[key].send(msg);
        });
    };

    window.aircheck = window.aircheck || {};
    window.aircheck.chat = chat;
}());
