import Index from 'aircheck/routes/index';
import App from 'aircheck/app';

var route;
module("Unit - IndexRoute", {
  setup: function(){
    var container = isolatedContainer([
      'route:index'
    ]);

    route = container.lookup('route:index');
  }
});

test("it exists", function(){
  ok(route);
  ok(route instanceof Ember.Route);
});
