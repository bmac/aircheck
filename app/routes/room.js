import chat from 'aircheck/helpers/chat';
import nameGen from 'aircheck/helpers/nameGen';

var RoomRoute = Ember.Route.extend({
    model: function(params) {
        return chat.joinRoom(nameGen.randomName(), params.room_name);
    }
});

export default RoomRoute;
