var IndexController = Ember.Controller.extend({
    goToRoom: function() {
        this.transitionToRoute('room', this.get('roomName'));
    }
});


export default IndexController;
