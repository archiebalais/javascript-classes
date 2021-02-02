class Person {
    constructor(name, softwareEngineer) {
        this.arms = 2;
        this.legs = 2;
        this.name = name;
        this.softwareEngineer = softwareEngineer;
        this.artists = [];
    }
    // this is a method
    greet() {
        console.log('Hello SEI-111');
    }
    // walk method
    walk() {
        console.log('Walking along the beach.');
    }
    // method with a parameter
    eat(food) {
        console.log(`Today, I am eating ${food}`);
    }
    // method working with arrays
    addArtist(artist) {
        console.log(`I like ${artist}`);
        this.artists.push(artist);

    }
}

// this is an instance of a class
// known as an object
// IMPORTANT: add the new keyword like so ...
const princeLeo = new Person('Leo Brooks', true);

// print attributes
console.log(princeLeo.name);
console.log(princeLeo.softwareEngineer);

// calling the methods (invoke)
princeLeo.walk();
princeLeo.eat('Dinosaur Chicken Nuggets');

// add a method on an instance
princeLeo.jump = function() {
    console.log('Weeeeee');
}


princeLeo.jump();
princeLeo.addArtist('Rico Nasty');
princeLeo.addArtist('Yeye');


// view an attribute
console.log(princeLeo.artists);



// const andrewBith = new Person ('andrew', true);
// andrewBith.fly = () => {
//     console.log('wooooo');
// }
// andrewBith.addArtist('03 Greedo');
// console.log(andrewBith.artists);

// andrewBith.fly();

const momo = new Person('Mocha Brown', true);
console.log(momo.name);
console.log(momo.softwareEngineer);
momo.walk();
momo.eat('Trader Joes Gluten Free Choccy');
momo.shy = (senpai)=>{
    console.log(`I sure hope ${senpai} notices me`)
}
momo.shy('phiphi');