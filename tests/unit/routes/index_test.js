import Index from 'aircheck/routes/index';
import App from 'aircheck/app';

var route;

module("Unit - IndexRoute", {
  setup: function(){
    route = App.__container__.lookup('route:index');
  }
});

test("it exists", function(){
  ok(route);
  ok(route instanceof Ember.Route);
});

test("#model", function(){
  expect(0);
  // deepEqual(route.model(), ['red', 'yellow', 'blue']);
});
