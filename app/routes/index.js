import nameGen from 'aircheck/services/nameGen';
import selectInput from 'aircheck/helpers/selectInput';

var IndexRoute = Ember.Route.extend({
    model: function() {
        return {roomName: nameGen.roomName()};
    }
});

export default IndexRoute;
