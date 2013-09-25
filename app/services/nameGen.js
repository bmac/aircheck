var firstNames = ['Professor', 'Doctor', 'Captain', 'Citizen', 'Councillor', 'Count',
                  'Vicar', 'Darth', 'Grand Moff', 'Commissioner'];
var lastNames = ['Rooster', 'Hampster', 'Albatross', 'Alpaca', 'Barracuda', 'Chinchilla',
                 'Dinosaur', 'Emu', 'Fox', 'Grasshopper', 'Hedgehog', 'Koala', 'Lobster',
                 'Owl', 'Penguin', 'Shark', 'Trout', 'Wallaby', 'Yak'];

var roomNames = ['Aerary', 'Aircraft cabin', 'Airport lounge',
                 'Aisle', 'Alcove', 'Almonry', 'Andron', 'Anechoic chamber',
                 'Antechamber', 'Apodyterium', 'Arizona room', 'Assembly hall',
                 'Atrium', 'Attic', 'Auditorium', 'Aula regia', 'Ballroom', 'Basement',
                 'Bathroom', 'Bedroom', 'Billiard room', 'Bonus room', 'Boudoir',
                 'Breezeway', 'Buttery', 'Cabin', 'Cabinet', 'Cafeteria', 'Caldarium',
                 'Calefactory', 'Cardroom', 'Central apparatus room', 'Changing room',
                 'Church hall', 'Church porch', 'Classroom', 'Cleanroom', 'Cloakroom',
                 'Closet', 'Common room', 'Common Room', 'Companionway',
                 'Computer lab', 'Conference hall', 'Control room', 'Conversation pit',
                 'Corner office', 'Count room', 'Courtroom', 'Cry room',
                 'Cryptoporticus', 'Cyzicene hall', 'Darbazi', 'Darkroom', 'Den',
                 'Dining room', 'Dormitory', 'Drawing room', 'Dungeon', 'Electrical room',
                 'Entryway', 'Equatorial room', 'Equipment room', 'Execution chamber',
                 'Fainting room', 'Fallout shelter', 'Family room', 'First aid room',
                 'Foyer', 'Frigidarium', 'Function hall', 'Furnace room',
                 'Garage', 'Garden office', 'Garret', 'Ghorfa', 'Great chamber', 
                 'Great hall', 'Great room', 'Green room', 'Hall', 'Inglenook', 'Kitchen',
                 'Laconicum', 'Larder', 'Laundry room', 'Living room', 'Lobby', 'Loft',
                 'Long gallery', 'Lumber room', 'Luxury box', 'Mailroom', 'Majlis',
                 'Man cave', 'Map Room', 'Mechanical room', 'Megaron', 'Mehmaan khana',
                 'Network operations center', 'Nilavara', 'Nursery', 'Office',
                 'Opisthodomos', 'Padded cell', 'Pantry', 'Parlour', 'Pinacotheca', 
                 'Presidential suite', 'Print room', 'Prison cell', 'Psychomanteum', 'PWD Room',
                 'Queue area', 'Rain porch', 'Recreation room', 'Refectory',
                 'Reredorter', 'Root cellar', 'Rotting room', 'Rotunda', 'Sacristy',
                 'Safe room', 'Sally port', 'Sauna', 'Secret passage', 'Semi-basement',
                 'Server room', 'Showroom', 'Sky lobby', 'Skyway', 'Sleeping porch',
                 'Slype', 'Small office/home office', 'Smoking room', 'Solar',
                 'Spear closet', 'Staff room', 'State room', 'Still room', 'Storm cellar',
                 'Student lounge', 'Studio', 'Study', 'Sudatorium', 'Suite', 'Sunroom',
                 'Tablinum', 'Tearoom', 'Tepidarium', 'Throne room', 'Triclinium',
                 'Undercroft', 'Utility room', 'Utility vault', 'Vestibule', 'Vestry',
                 'Village hall', 'Void deck', 'Waiting room', 'Whispering gallery',
                 'Wine cellar', 'Wiring closet', 'Workshop'];

var randomNum = function(max) {
    return Math.floor(Math.random() * max);
};

var randomName = function() {
    var first = firstNames[randomNum(firstNames.length)];
    var last = lastNames[randomNum(lastNames.length)];
    return [first, last].join(' ');
};

var roomName = function() {
    return roomNames[randomNum(roomNames.length)];
};

var nameGen = {
    randomName: randomName,
    roomName: roomName
};


export default nameGen;
