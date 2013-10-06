var padZero = function(num) {
    if (num < 10) {
        return '0' + num;
    }
    return num;
};
Ember.Handlebars.registerBoundHelper('messageTime', function(time) {
    var date = new Date(parseInt(time, 10));
    console.log(arguments);
    console.log(time, date.getHours());
    var hours = padZero(date.getHours());
    var minutes = padZero(date.getMinutes());
    var seconds = padZero(date.getSeconds());
    return [
        '[',
        hours,
        ':',
        minutes,
        ':',
        seconds,
        ']',
        ].join('');
});


export default {};
