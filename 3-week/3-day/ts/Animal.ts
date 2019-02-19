' use strict';

// *Create an Animal class
//   -Every animal has a hunger value, which is a whole number
//   -Every animal has a thirst value, which is a whole number
//   .when creating a new animal object these values are created with the default 50 value
//   -Every animal can eat() which decreases their hunger by one
//   -Every animal can drink() which decreases their thirst by one
//   -Every animal can play() which increases both by one

class Animal {

    hunger: number;
    thirsty: number;

    constructor(hunger: number = 50, thirsty: number = 50) {
        this.hunger = hunger;
        this.thirsty = thirsty;
    }
    eat() {
        return this.hunger--;
    }
    drink() {
        return this.thirsty--;
    }
    play() {
        return this.hunger++ , this.thirsty++;
    }

}
let lion = new Animal;
lion.play();
console.log(lion);

// vaghty parametre constructor meghdar dashte beshe az aval, mishavad parametr ra khli gozasht ya number delkhah ra dad

let fox = new Animal(34, 56);
console.log(fox);

