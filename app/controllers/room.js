
var RoomController = Ember.ObjectController.extend({
    actions: {
        sendMessage: function(msg) {
            var room = this.get('model');
            room.send(msg);
            this.set('message', '');
        },
        toggleEditNick: function() {
            this.toggleProperty('editNick');
            console.log('editNick', this.get('editNick'));
        },
        saveNick: function(newNick) {
            var room = this.get('model');
            room.setNick(newNick);
            this.set('newNick', '');
            this.set('editNick', false);
        }
    },
    editNick: false,
    msg: '',
    newNick: ''
});

export default RoomController;
