import Index from 'aircheck/routes/index';
import App from 'aircheck/app';

module("Acceptances - Index", {
  setup: function(){
    App.reset();
  }
});

test("index renders", 1, function(){
  // expect(3);

  visit('/').then(function(){
    ok(exists("label[for='roomName']:contains('Enter room name:')"));
  });
});
