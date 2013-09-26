/*globals Recorder */ 

var Recording = function(stream) {
    var AudioContext = window.AudioContext || window.webkitAudioContext;
    var context = new AudioContext();
    var mediaSourceNode = context.createMediaStreamSource(stream);
    this._rec = new Recorder(mediaSourceNode, {workerPath: '/vendor/libs/recorderWorker.js'});
    this._rec.record();
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
