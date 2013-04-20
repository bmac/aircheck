App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
    this.route("room", { path: "/room" });
});
var l = Ember.HashLocation.create();

App.IndexController = Ember.Controller.extend({
    goToRoom: function() {
        l.setURL('room');
    }
});
