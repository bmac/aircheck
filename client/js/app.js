App = Ember.Application.create();

App.Router.map(function() {
    // put your routes here
    this.route("room", { path: "/room/:roomName" });
    this.route("arraytest");
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

App.ArraytestRoute = Ember.Route.extend({
    model: function(params) {
        return [1, 2, 3];
    }
});

App.RoomController = Ember.ObjectController.extend({
    init: function() {
        var self = this;

        rtc.createStream({video: true, audio:false}, function(stream){
            var objUrl = window.URL.createObjectURL(stream);
            self.set('videoSrc', objUrl);
        });

        rtc.on('add remote stream', function(stream, socketId) {
            var otherVideos = self.get('otherVideos') || [];
            otherVideos.push({
                stream: stream,
                socketId: socketId,
                videoSrc: URL.createObjectURL(stream)
            });
            self.set('otherVideos', otherVideos);
        });

        rtc.on('disconnect stream', function(socketId) {
            var otherVideos = self.get('otherVideos').reject(function(stream) {
                return stream.socketId = socketId;
            });
            self.set('otherVideos', otherVideos);
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

