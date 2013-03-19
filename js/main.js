

var onSuccess = function(stream) {
    var video = document.getElementById('video');
    video.src = window.URL.createObjectURL(stream);
    
};

var onError = function() {
    console.log('an error occured ' , arguments);
};

navigator.webkitGetUserMedia({video: true, audio: true}, onSuccess, onError);

