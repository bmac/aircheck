import chat from 'aircheck/services/chat';
import nameGen from 'aircheck/services/nameGen';

var RoomRoute = Ember.Route.extend({
    model: function(params) {
        return chat.joinRoom(nameGen.randomName(), params.room_name);
    }
});

export default RoomRoute;
