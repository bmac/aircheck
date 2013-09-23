var firstNames = ['Professor', 'Doctor', 'Captain', 'Citizen', 'Councillor', 'Count', 
                  'Vicar', 'Darth', 'Grand Moff', 'Commissioner'];
var lastNames = ['Rooster', 'Hampster', 'Albatross', 'Alpaca', 'Barracuda', 'Chinchilla', 
                 'Dinosaur', 'Emu', 'Fox', 'Grasshopper', 'Hedgehog', 'Koala', 'Lobster', 
                 'Owl', 'Penguin', 'Shark', 'Trout', 'Wallaby', 'Yak'];

var randomNum = function(max) {
    return Math.floor(Math.random() * max);
};

var randomName = function() {
    var first = firstNames[randomNum(firstNames.length)];
    var last = lastNames[randomNum(lastNames.length)];
    return [first, last].join(' ');
};

var nameGen = {
    randomName: randomName
};


export default nameGen;
