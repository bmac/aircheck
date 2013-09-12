import Resolver from 'resolver';
import router from 'aircheck/router';


var App = Ember.Application.create({
  LOG_ACTIVE_GENERATION: true,
  LOG_VIEW_LOOKUPS: true,
  modulePrefix: 'aircheck', // TODO: loaded via config
  Resolver: Resolver,
  Router: Ember.Router.extend({
    router: router
  })
});


export default App;
