import Index from 'aircheck/routes/index';
import App from 'aircheck/app';
import chat from 'aircheck/helpers/chat';

module("Acceptances - Room", {
  setup: function(){
    App.reset();
  },
  teardown: function() {
      App.reset();
  }
});

test("index renders", 1, function(){
  this.stub(chat, 'joinRoom', function() {
      return Ember.RSVP.resolve({
          peers: []
      });
  });

  visit('/room/asdf').then(function(){
      equal($('.others').text().trim(), 'Other Videos: 0');
  });
});
