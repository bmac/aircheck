import App from 'aircheck/app';
import chat from 'aircheck/services/chat';
import nameGen from 'aircheck/services/nameGen';

var route;
module("Unit - RoomRoute", {
  setup: function(){
    var container = isolatedContainer([
      'route:room'
    ]);

    route = container.lookup('route:room');
  }
});

test("it exists", function(){
  ok(route);
  ok(route instanceof Ember.Route);
});

test("model decodes uri strings", function(){
  this.stub(chat, 'joinRoom');
  this.stub(nameGen, 'randomName').returns('user name');
  route.model({room_name: 'room%20name'});
  ok(chat.joinRoom.calledWith('user name', 'room name'), 'the room_name param should be decoded');
});
