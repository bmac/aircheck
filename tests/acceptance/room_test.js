import chat from 'aircheck/services/chat';
import Recording from 'aircheck/services/recording';
var App;

module('Acceptances - Room', {
    setup: function(){
        App = startApp();
        //App.reset();
    },
    teardown: function() {
        Ember.run(App, 'destroy');
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

test('the user should be able to change their nick', 1, function(){
    var setNick = this.spy();
    this.stub(chat, 'joinRoom', function() {
        return Ember.RSVP.resolve({
            peers: [],
            setNick: setNick
        });
    });

    visit('/room/asdf').
    click('.nick').
    fillIn('.new-nick', 'new nick name').
    keyEvent('.new-nick', 'keyup', 13). // 13 === enter
    then(function() {
      ok(setNick.called);
    });

});


test('the user should be able to download their audio', 1, function(){
    sinon.stub(Recording, 'downloadWAV');
    var setNick = this.spy();
    this.stub(chat, 'joinRoom', function() {
        return Ember.RSVP.resolve({
            peers: [],
            setNick: setNick
        });
    });

    visit('/room/asdf').
    click('.download-audio').
    then(function() {
        ok(Recording.downloadWAV.called, 'downloadWAV was called');
        Recording.downloadWAV.restore();
    });

});
