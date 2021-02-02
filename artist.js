class Artist {
    constructor(name, age, genre, label) {
        // you will need to decide what the datatypes have to be
        // datatypes: string, integer, arrays, objects, booleans
        this.name = name;
        this.age = age;
        this.genre = genre;
        this.label = label;
        this.albums = [];
        this.songs = [];
        this.image = '';
        this.instagram = null;
    }

    addAlbum(album) {
        this.albums.push(album);
        console.log(`This is the album, ${album} from ${this.name}`)
    }

    addSongs(song) {
        this.songs.push(song);
        console.log(`This is the song, ${song} from ${this.name}`)
    }

    addImage(imageLink) {
        this.image = imageLink;
    }

    addIG(username) {
        this.instagram = username;
    }
}

// this is an instance of the Artist class
const drake = new Artist('Drake', '33', 'hip hop', 'cash money records');
const bloodOrange = new Artist('Blood Orange', '35', 'funk', 'Terrible Records');
const sahBabii = new Artist('Sah Babii', '23', 'hip hop', 'Warner Bros');

sahBabii.addAlbum('Squidtastic');
bloodOrange.addAlbum('Cupid Deluxe');

sahBabii.addSongs('Purple Umbrella');
bloodOrange.addSongs('Hope');

sahBabii.addImage('https://assets.audiomack.com/sahbabii/8de0bd55f23b5a7cebdfa6422306d25947cac73869b44885e544b44ae12f4280.jpeg');
bloodOrange.addImage('https://www.nme.com/wp-content/uploads/2016/09/2014DevHynes_Getty484688951270514-696x464.jpg');

sahBabii.addIG('sahbabii');
bloodOrange.addIG('devhynes');