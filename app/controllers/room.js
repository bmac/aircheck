import Recording from 'aircheck/services/recording';

var RoomController = Ember.ObjectController.extend({
    actions: {
        sendMessage: function(msg) {
            var room = this.get('model');
            room.send(msg);
            this.set('message', '');
        },
        toggleEditNick: function() {
            this.set('newNick', this.get('model.user.nick'));
            this.toggleProperty('editNick');
        },
        saveNick: function(newNick) {
            var room = this.get('model');
            room.setNick(newNick);
            this.set('editNick', false);
        },
        downloadAudio: function() {
            Recording.downloadWAV(this.get('model').recording);
        }
    },
    editNick: false,
    msg: '',
    newNick: ''
});

export default RoomController;
