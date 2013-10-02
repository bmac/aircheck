import chat from 'aircheck/services/chat';
import nameGen from 'aircheck/services/nameGen';
import selectInput from 'aircheck/helpers/selectInput';

var RoomRoute = Ember.Route.extend({
    model: function(params) {
      
        return chat.joinRoom(nameGen.randomName(), decodeURI(params.room_name));
    }
});

export default RoomRoute;
