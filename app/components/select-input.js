var SelectInputView = Ember.TextField.extend({
  becomeSelected: function() {
    this.$().select();
  }.on('didInsertElement')
});

var SelectInputComponent = Ember.Component.extend({
  SelectInputView: SelectInputView
});

export default SelectInputComponent;
