(function() {

// rtc events
// 'disconnect stream'
// 'connections'
// 'receive ice candidate'
// 'disconnect stream'
// 'receive offer'
// 'receive answer'
// 'connect'
// 'close_stream'
// 'ice candidate'
// 'peer connection opened'
// 'add remote stream'
// 'ready'
// 'data stream open'
// 'data stream close'
// 'data stream data'
// 'data stream error'


    var createVideoElement = function(stream, attrs) {
        attrs = attrs || {};
        var video = document.createElement('video');
        Object.keys(attrs).forEach(function(key) {
            video[key] = attrs[key];
        });
        video.src = window.URL.createObjectURL(stream);
        return video;
    };

    rtc.createStream({video: true, audio:false}, function(stream){
        // get local stream for manipulation
        var localVideo = document.getElementById('localVideo');
        var video = createVideoElement(stream);
        localVideo.appendChild(video);
        video.play();
    });

    rtc.on('add remote stream', function(stream, socketId) {
        var id = 'remote' + socketId;
        debugger;
        var video = createVideoElement(stream, {id: id});
        var remoteVideos = document.getElementById('remoteVideos');
        remoteVideos.appendChild(video);
        video.play();
    });
    
    rtc.on('disconnect stream', function(data) {
        // TODO
    });
    
    rtc.connect('ws://localhost:8001');
    

}());
