import MessagePageComponent from 'aircheck/components/message-pane';


module("Unit - MessagePageComponent", {});

test('should filter out any messages that are not MSG or NICK', 2, function() {
    
    var messagePageComponent = MessagePageComponent.create({
        messages: [{type: 'MSG'},
                   {type: 'NICK'},
                   {type: 'USER'}]
    });
    equal(messagePageComponent.get('messages').length, 3);
    equal(messagePageComponent.get('chatMessages').length, 2);
});
