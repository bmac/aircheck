var App = Ember.Application.create();
// var peer = App.peer = new Peer({key: '5u88fz5wmt7nl8fr'});

App.Router.map(function() {
    // put your routes here
    this.resource('room', { path: '/room/:room_name' });
});
var l = Ember.HashLocation.create();

App.IndexController = Ember.Controller.extend({
    goToRoom: function() {
        this.transitionToRoute('room', {roomName: this.get('roomName')});
    }
});


App.RoomRoute = Ember.Route.extend({
    model: function(params) {
        return {
            roomName: params.room_name
        };
    }
});

App.RoomController = Ember.ObjectController.extend({
    otherVideos: [],
    init: function() {
        var self = this;

        chat.startAV(function(stream){
            var objUrl = window.URL.createObjectURL(stream);
            self.set('videoSrc', objUrl);
        });

        self.set('otherVideos', chat.remotes);

        window.c = this;
    },
    roomNameObserver: function() {
        // do not join an empty room
        if (this.get('roomName')) {
            chat.joinRoom(this.get('roomName'));
        }
    }.observes('roomName')
});
