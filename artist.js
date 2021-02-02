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
        console.log(`This is the album, ${song} from ${this.name}`)
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

