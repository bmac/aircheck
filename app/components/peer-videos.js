var PeerVideosComponent = Ember.Component.extend({
    rows: function() {
        var peers = this.get('peers');
        // There is prolly a smarter way to write the algorithm...
        // 2 videos on the same row        
        if (peers.length < 3) {
            return [peers];
        }
        // 4 videos on 2 rows
        if (peers.length < 5) {
            return [peers.slice(0, 2), peers.slice(2, peers.length)];
        }
        // 9 videos on 3 rows
        if (peers.length < 10) {
            return [peers.slice(0, 3),
                    peers.slice(3, 6),
                    peers.slice(6, peers.length)
                   ];
        }
        // 16 videos on 4 rows
        return [peers.slice(0, 4),
                peers.slice(4, 8),
                peers.slice(8, 12),
                peers.slice(12, peers.length)
               ];
    }.property('peers')
});

export default PeerVideosComponent;
