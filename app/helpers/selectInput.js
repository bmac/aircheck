var SelectInputView = Ember.TextField.extend({
  becomeSelected: function() {
    this.$().select();
  }.on('didInsertElement')
});

function normalizeHash(hash, hashTypes) {
  for (var prop in hash) {
    if (hashTypes[prop] === 'ID') {
      hash[prop + 'Binding'] = hash[prop];
      delete hash[prop];
    }
  }
}


Ember.Handlebars.registerHelper('selectInput', function(options) {
  Ember.assert('You can only pass attributes to the `selectInput` helper, not arguments', arguments.length < 2);

  var hash = options.hash,
      types = options.hashTypes,
      inputType = hash.type,
      onEvent = hash.on;

  delete hash.type;
  delete hash.on;

  normalizeHash(hash, types);

  hash.type = inputType;
  hash.onEvent = onEvent || 'enter';
  return Ember.Handlebars.helpers.view.call(this, SelectInputView, options);
});


export default {};
