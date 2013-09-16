import Index from 'aircheck/routes/index';
import App from 'aircheck/app';

module("Acceptances - Room", {
  setup: function(){
    App.reset();
  },
  teardown: function() {
      App.reset();
  }
});

test("index renders", 1, function(){

  visit('/room/asdf').then(function(){
      equal($('.others').text().trim(), 'Other Videos: 0');
  });
});
