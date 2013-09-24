var App;

module("Acceptances - Index", {
  setup: function(){
    App = startApp();
    //App.reset();
  },
  teardown: function() {
      Ember.run(App, 'destroy');
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
      // I dont like the coupling in this test...
      var activeTransition = App.__container__.lookup('router:main').router.activeTransition;
      equal(activeTransition.targetName, 'room');
      equal(activeTransition.params.room_name, 'Room Name');
  });
});
