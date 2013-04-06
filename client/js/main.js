(function() {

    var onSuccess = function(stream) {
        var video = document.getElementById('video');
        video.src = window.URL.createObjectURL(stream);

    };

    var onError = function() {
        console.log('an error occured ' , arguments);
    };

    //navigator.webkitGetUserMedia({video: true, audio: true}, onSuccess, onError);

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
