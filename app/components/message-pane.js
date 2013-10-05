var MessagePaneComponent = Ember.Component.extend({
    chatMessages: Ember.computed.filter('messages', function(message) {
        var type = message.type;
        return type === 'MSG' || type === 'NICK';
    })
});

export default MessagePaneComponent;
