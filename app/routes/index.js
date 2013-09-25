import nameGen from 'aircheck/services/nameGen';
import selectInput from 'aircheck/helpers/selectInput';

var IndexRoute = Ember.Route.extend({
    model: function() {
        console.log({roomName: nameGen.roomName()});
        return {roomName: nameGen.roomName()};
    }
});

export default IndexRoute;
