import PeerVideosComponent from 'aircheck/components/peer-videos';


module("Unit - PeerVideosComponent", {});
var peer = 'peer';

test('should return 1 row for 2 videos', 1, function() {
    var peerVideos = PeerVideosComponent.create({
        peers: [peer, peer]
    });
    equal(peerVideos.get('rows').length, 1);
});

test('should return 2 row for 4 videos', 1, function() {
    
    var peerVideos = PeerVideosComponent.create({
        peers: [peer, peer, peer, peer]
    });
    equal(peerVideos.get('rows').length, 2);
});

test('should return 3 row for 5 videos', 1, function() {
    
    var peerVideos = PeerVideosComponent.create({
        peers: [peer, peer, peer, peer, peer]
    });
    equal(peerVideos.get('rows').length, 3);
});

test('should return 4 row for 16 videos', 1, function() {
    
    var peerVideos = PeerVideosComponent.create({
        peers: [
            peer, peer, peer, peer,
            peer, peer, peer, peer,
            peer, peer, peer, peer,
            peer, peer, peer, peer
        ]
    });
    equal(peerVideos.get('rows').length, 4);
});
