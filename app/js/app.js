var App = Ember.Application.create();

App.Router.map(function() {
    // put your routes here
    this.route('room', { path: '/room/:roomName' });
});
var l = Ember.HashLocation.create();

App.IndexController = Ember.Controller.extend({
    goToRoom: function() {
        l.setURL('room/' + this.get('roomName'));
    }
});


App.RoomRoute = Ember.Route.extend({
    model: function(params) {
        return {
            roomName: params.roomName
        };
    }
});

App.RoomController = Ember.ObjectController.extend({
    otherVideos: [],
    init: function() {
        var self = this;

        
        window.c = this;
    },
    roomNameObserver: function() {
        // do not join an empty room
        if (this.get('roomName')) {
            
        }
    }.observes('roomName')
});
