//var chat = aircheck.chat;
var chat = {};

var App = Ember.Application.create();
// var peer = App.peer = new Peer({key: '5u88fz5wmt7nl8fr'});

App.Router.map(function() {
    // put your routes here
    this.resource('room', { path: '/room/:room_name' });
});

App.Router.reopen({
    location: 'history',
});


App.IndexController = Ember.Controller.extend({
    goToRoom: function() {
        this.transitionToRoute('room', this.get('roomName'));
    }
});


App.RoomRoute = Ember.Route.extend({
    model: function(params) {
        return chat.joinRoom(params.room_name);
    }
});

App.RoomController = Ember.ObjectController.extend({});
