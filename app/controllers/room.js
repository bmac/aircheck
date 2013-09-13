import chat from 'aircheck/helpers/chat';

var RoomController = Ember.ObjectController.extend({
    actions: {
        sendMessage: function(msg) {
            chat.sendAll(msg);
            this.set('message', '');
        }
    }
});

export default RoomController;
