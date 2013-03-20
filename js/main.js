

var onSuccess = function(stream) {
    var video = document.getElementById('video');
    video.src = window.URL.createObjectURL(stream);
    
};

var onError = function() {
    console.log('an error occured ' , arguments);
};

navigator.webkitGetUserMedia({video: true, audio: true}, onSuccess, onError);

var webrtc = new WebRTC({
    // the id/element dom element that will hold "our" video
    localVideoEl: 'localVideo',
    // the id/element dom element that will hold remote videos
    remoteVideosEl: 'remotesVideos',
    // immediately ask for camera access
    autoRequestMedia: true
});
