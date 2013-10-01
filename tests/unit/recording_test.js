import Recording from 'aircheck/services/recording';

Ember.RSVP.configure('onerror', function(e) {
  start();
  ok(false, e);
});
var AudioContext, stream, mediaStream, recorderObject;

module("Unit - Recording", {
  setup: function() {
    AudioContext = window.AudioContext || window.webkitAudioContext;
    stream = 'stream';
    recorderObject = {
      record: sinon.spy(),
      exportWAV: function(cb) {
        cb('blob');
      }
    };
    var context = new AudioContext();
    mediaStream = context.createMediaElementSource(new Audio());

    sinon.stub(AudioContext.prototype, 'createMediaStreamSource').returns(mediaStream);
    sinon.stub(window, 'Recorder').returns(recorderObject);
    Ember.testing = false;
  },
  teardown: function() {
    AudioContext.prototype.createMediaStreamSource.restore();
    Recorder.restore();
    Ember.testing = true;
  }
});

test('Recording#create', 3, function() {
  var recording = Recording.create(stream);

  ok(AudioContext.prototype.createMediaStreamSource.calledWith(stream), 'createMediaStreamSource called with stream');
  ok(window.Recorder.calledWith(mediaStream), 'Recorder is created with a mediaStream');
  ok(recorderObject.record.called, 'recorder#record is called');
});


test('Recording#downloadWAV', 1, function() {
//  Ember.run(function() {
  stop();
  var recording = Recording.create('stream');
  sinon.stub(Recorder, 'forceDownload');
  Recording.downloadWAV(recording).then(function() {
    start();
    ok(Recorder.forceDownload.called);
  });
//  });
});
