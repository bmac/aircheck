App = Ember.Application.create();

App.Router.map(function() {
    // put your routes here
    this.route("room", { path: "/room/:roomName" });
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
    init: function() {
        var self = this;

        rtc.createStream({video: true, audio:false}, function(stream){
            var objUrl = window.URL.createObjectURL(stream);
            self.set('videoSrc', objUrl);
        });
        window.c = this;
    },
    roomNameObserver: function() {
        // do not join an empty room
        if (this.get('roomName')) {
            rtc.connect('ws://localhost:8001', this.get('roomName'));
        }
    }.observes('roomName')
});
