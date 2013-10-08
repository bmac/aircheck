import messageTime from 'aircheck/helpers/messageTime';

module("Unit - helpers - messageTime", {});

test('messageTime formats time', 1, function() {
  var date = new Date();
  date.setHours(1);
  date.setMinutes(1);
  date.setSeconds(7);
  
  equal(messageTime(date.getTime()), '[01:01:07]');
});

