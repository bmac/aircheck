import Index from 'aircheck/routes/index';
import App from 'aircheck/app';

module("Acceptances - Index", {
  setup: function(){
    App.reset();
  }
});

test("index renders", 1, function(){
  visit('/').then(function(){
    ok(exists("h1:contains('Welcome to Aircheck')"));
  });
});

test("goToRoom action navigates to the room route", 2, function(){
  visit('/')
  .fillIn(".room-name", "Room Name")
  .click(".join").then(function() {
      var activeTransition = App.__container__.lookup('router:main').router.activeTransition;
      equal(activeTransition.targetName, 'room');
      equal(activeTransition.params.room_name, 'Room Name');
  });
});
