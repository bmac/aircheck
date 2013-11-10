import messageTime from 'aircheck/helpers/messageTime';

module("Helpers - messageTime", {});


test('should formate a timestamp', 1, function() {
    equal(messageTime(new Date(2013, 2, 15, 1, 23, 59).getTime()), '[01:23:59]');
});
