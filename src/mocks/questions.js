const questions = [{
    "type": "artist",
    "song": {
        "artist": "Endless Love",
        "src": "https://htmlacademy-react-2.appspot.com/guess-melody/static/music/Dirty_Mac.mp3"
    },
    "answers": [{
        "picture": "https://htmlacademy-react-2.appspot.com/guess-melody/static/artist/Endless_Love.jpg",
        "artist": "Endless Love"
    }, {
        "picture": "https://htmlacademy-react-2.appspot.com/guess-melody/static/artist/Silent_Partner.jpg",
        "artist": "Silent Partner"
    }, {
        "picture": "https://htmlacademy-react-2.appspot.com/guess-melody/static/artist/Unicorn_Heads.jpg",
        "artist": "Unicorn Heads"
    }]
}, {
    "type": "artist",
    "song": {
        "artist": "Endless Love",
        "src": "https://htmlacademy-react-2.appspot.com/guess-melody/static/music/Dirty_Mac.mp3"
    },
    "answers": [{
        "picture": "https://htmlacademy-react-2.appspot.com/guess-melody/static/artist/Endless_Love.jpg",
        "artist": "Endless Love"
    }, {
        "picture": "https://htmlacademy-react-2.appspot.com/guess-melody/static/artist/Density_n_Time.jpg",
        "artist": "Density & Time"
    }, {
        "picture": "https://htmlacademy-react-2.appspot.com/guess-melody/static/artist/The_Whole_Other.jpg",
        "artist": "The Whole Other"
    }]
}, {
    "type": "artist",
    "song": {
        "artist": "Unicorn Heads",
        "src": "https://htmlacademy-react-2.appspot.com/guess-melody/static/music/Acoustic_Circles.mp3"
    },
    "answers": [{
        "picture": "https://htmlacademy-react-2.appspot.com/guess-melody/static/artist/Density_n_Time.jpg",
        "artist": "Density & Time"
    }, {
        "picture": "https://htmlacademy-react-2.appspot.com/guess-melody/static/artist/Unicorn_Heads.jpg",
        "artist": "Unicorn Heads"
    }, {
        "picture": "https://htmlacademy-react-2.appspot.com/guess-melody/static/artist/Spazz_Cardigan.jpg",
        "artist": "Spazz Cardigan"
    }]
}, {
    "type": "genre",
    "genre": "country",
    "answers": [{
        "src": "https://htmlacademy-react-2.appspot.com/guess-melody/static/music/Mob_Battle.mp3",
        "genre": "alternative"
    }, {
        "src": "https://htmlacademy-react-2.appspot.com/guess-melody/static/music/Renegade_Jubilee.mp3",
        "genre": "electronic"
    }, {
        "src": "https://htmlacademy-react-2.appspot.com/guess-melody/static/music/Memories_Station_of_Tomorrow.mp3",
        "genre": "alternative"
    }, {
        "src": "https://htmlacademy-react-2.appspot.com/guess-melody/static/music/Whaling_City.mp3",
        "genre": "country"
    }]
}, {
    "type": "genre",
    "genre": "country",
    "answers": [{
        "src": "https://htmlacademy-react-2.appspot.com/guess-melody/static/music/Dub_Spirit.mp3",
        "genre": "reggae"
    }, {
        "src": "https://htmlacademy-react-2.appspot.com/guess-melody/static/music/Blue_Whale.mp3",
        "genre": "alternative"
    }, {
        "src": "https://htmlacademy-react-2.appspot.com/guess-melody/static/music/Azure.mp3",
        "genre": "electronic"
    }, {"src": "https://htmlacademy-react-2.appspot.com/guess-melody/static/music/Parkside.mp3", "genre": "country"}]
}, {
    "type": "genre",
    "genre": "electronic",
    "answers": [{
        "src": "https://htmlacademy-react-2.appspot.com/guess-melody/static/music/Azure.mp3",
        "genre": "electronic"
    }, {
        "src": "https://htmlacademy-react-2.appspot.com/guess-melody/static/music/Mob_Battle.mp3",
        "genre": "alternative"
    }, {
        "src": "https://htmlacademy-react-2.appspot.com/guess-melody/static/music/Clean_Break.mp3",
        "genre": "electronic"
    }, {
        "src": "https://htmlacademy-react-2.appspot.com/guess-melody/static/music/Renegade_Jubilee.mp3",
        "genre": "electronic"
    }]
}, {
    "type": "genre",
    "genre": "reggae",
    "answers": [{
        "src": "https://htmlacademy-react-2.appspot.com/guess-melody/static/music/Nothin_Yet.mp3",
        "genre": "alternative"
    }, {
        "src": "https://htmlacademy-react-2.appspot.com/guess-melody/static/music/Bark.mp3",
        "genre": "reggae"
    }, {
        "src": "https://htmlacademy-react-2.appspot.com/guess-melody/static/music/Memories_Station_of_Tomorrow.mp3",
        "genre": "alternative"
    }, {
        "src": "https://htmlacademy-react-2.appspot.com/guess-melody/static/music/Renegade_Jubilee.mp3",
        "genre": "electronic"
    }]
}, {
    "type": "genre",
    "genre": "electronic",
    "answers": [{
        "src": "https://htmlacademy-react-2.appspot.com/guess-melody/static/music/Azure.mp3",
        "genre": "electronic"
    }, {
        "src": "https://htmlacademy-react-2.appspot.com/guess-melody/static/music/Weak_Knight.mp3",
        "genre": "electronic"
    }, {
        "src": "https://htmlacademy-react-2.appspot.com/guess-melody/static/music/Clean_Break.mp3",
        "genre": "electronic"
    }, {
        "src": "https://htmlacademy-react-2.appspot.com/guess-melody/static/music/Mob_Battle.mp3",
        "genre": "alternative"
    }]
}, {
    "type": "genre",
    "genre": "reggae",
    "answers": [{
        "src": "https://htmlacademy-react-2.appspot.com/guess-melody/static/music/Mob_Battle.mp3",
        "genre": "alternative"
    }, {
        "src": "https://htmlacademy-react-2.appspot.com/guess-melody/static/music/Blue_Whale.mp3",
        "genre": "alternative"
    }, {
        "src": "https://htmlacademy-react-2.appspot.com/guess-melody/static/music/Dirty_Mac.mp3",
        "genre": "country"
    }, {"src": "https://htmlacademy-react-2.appspot.com/guess-melody/static/music/Addis_Ababa.mp3", "genre": "reggae"}]
}, {
    "type": "genre",
    "genre": "country",
    "answers": [{
        "src": "https://htmlacademy-react-2.appspot.com/guess-melody/static/music/Dirty_Mac.mp3",
        "genre": "country"
    }, {
        "src": "https://htmlacademy-react-2.appspot.com/guess-melody/static/music/Whaling_City.mp3",
        "genre": "country"
    }, {
        "src": "https://htmlacademy-react-2.appspot.com/guess-melody/static/music/Parkside.mp3",
        "genre": "country"
    }, {"src": "https://htmlacademy-react-2.appspot.com/guess-melody/static/music/Azure.mp3", "genre": "electronic"}]
}]

export default questions;
