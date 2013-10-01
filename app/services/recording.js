/*globals Recorder */ 

var Recording = {};

Recording.create = function(stream) {
    var recording = {};
    var AudioContext = window.AudioContext || window.webkitAudioContext;
    var context = new AudioContext();
    var mediaSourceNode = context.createMediaStreamSource(stream);
    recording._rec = new Recorder(mediaSourceNode, {workerPath: '/vendor/libs/recorderWorker.js'});
    recording._rec.record();
    return recording;
};

Recording.downloadWAV = function(recording) {
    var promise = new Ember.RSVP.Promise(function(resolve, reject) {
        recording._rec.exportWAV(function(blob) {
            Recorder.forceDownload(blob);
            resolve(blob);
        });
    });
    return promise;
};

export default Recording;
