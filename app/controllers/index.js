var IndexController = Ember.ObjectController.extend({
    actions: {
        goToRoom: function() {
            this.transitionToRoute('room', this.get('roomName'));
        }
    }
});


export default IndexController;
