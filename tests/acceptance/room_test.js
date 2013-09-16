import App from 'aircheck/app';
import chat from 'aircheck/helpers/chat';

module('Acceptances - Room', {
    setup: function(){
        App.reset();
    },
    teardown: function() {
        App.reset();
    }
});

test('room renders', 1, function(){
    this.stub(chat, 'joinRoom', function() {
        return Ember.RSVP.resolve({
            peers: []
        });
    });

    visit('/room/asdf').then(function(){
        equal($('.others').text().trim(), 'Other Videos: 0');
    });
});

test('clicking send should send a message', 1, function(){
    var send = this.spy();
    this.stub(chat, 'joinRoom', function() {
        return Ember.RSVP.resolve({
            peers: [],
            send: send
        });
    });

    visit('/room/asdf').then(function(){
        return click('button.send');
    }).then(function() {
        ok(send.called);
    });
});
