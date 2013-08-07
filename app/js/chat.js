var chat = {};

chat.joinRoom = function(roomName) {
    rtc.connect('ws://localhost:8001/', roomName);
};

chat.startAV = function(cb) {
    rtc.createStream({video: true, audio:true}, function(stream){
        cb(stream);
    });
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
