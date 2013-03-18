

var onSuccess = function(stream) {
    var video = document.getElementById('video');
    var audio = document.getElementById('audio');
    video.src = window.URL.createObjectURL(stream);
    // audio.src = window.URL.createObjectURL(stream);
    
};

var onError = function() {
    console.log('an error occured ' , arguments);
};

navigator.webkitGetUserMedia({video: true, audio: true}, onSuccess, onError);
