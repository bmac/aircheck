
var RoomController = Ember.ObjectController.extend({
    actions: {
        sendMessage: function(msg) {
            var room = this.get('model');
            room.send(msg);
            this.set('message', '');
        }
    }
});

export default RoomController;
