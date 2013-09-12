import chat from 'aircheck/helpers/chat';

var RoomRoute = Ember.Route.extend({
    model: function(params) {
        return chat.joinRoom('bmac', params.room_name);
    }
});

export default RoomRoute;
