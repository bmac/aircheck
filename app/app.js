import Resolver from 'resolver';

var App = Ember.Application.create({
  LOG_ACTIVE_GENERATION: true,
  LOG_VIEW_LOOKUPS: true,
  modulePrefix: 'aircheck', // TODO: loaded via config
  Resolver: Resolver
});

import routes from 'aircheck/routes';
App.Router.map(routes); // TODO: just resolve the router

export default App;
