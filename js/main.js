(function() {

    var onSuccess = function(stream) {
        var video = document.getElementById('video');
        video.src = window.URL.createObjectURL(stream);

    };

    var onError = function() {
        console.log('an error occured ' , arguments);
    };

    //navigator.webkitGetUserMedia({video: true, audio: true}, onSuccess, onError);

    var webrtc = new WebRTC({
        // the id/element dom element that will hold "our" video
        localVideoEl: 'localVideo',
        // the id/element dom element that will hold remote videos
        remoteVideosEl: 'remotesVideos',
        // immediately ask for camera access
        autoRequestMedia: true
    });

    // we have to wait until it's ready
    webrtc.on('readyToCall', function () {
        // you can name it anything
        webrtc.joinRoom('test room 12345 test test');
	var video = document.getElementById('localVideo').children[0];
	var context = new webkitAudioContext();
	var mediaSourceNode = context.createMediaElementSource(video);	
	window.rec = new Recorder(mediaSourceNode, 
				  {workerPath: 'js/vendor/recorderWorker.js'});
	rec.record();	
	
    });

    $('#stopRecording').click(function() {
	rec.stop();
    });

    

}());
