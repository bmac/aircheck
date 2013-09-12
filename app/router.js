var router = Ember.Router.map(function(){
    this.resource('room', { path: '/room/:room_name' });
  // this.resource('posts', function() {
  //   this.route('new');
  // });
});

export default router;
