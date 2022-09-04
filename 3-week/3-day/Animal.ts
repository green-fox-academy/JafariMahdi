' use strict';

class Animal {

    hunger: number;
    thirsty: number;

    constructor(hunger: number = 50, thirsty: number = 50) {
        this.hunger = hunger;
        this.thirsty = thirsty;
    }
    eat() {
        this.hunger--;
    }
    drink() {
         this.thirsty--;
    }
    play() {
         this.hunger++ , this.thirsty++;
    }

}
let lion = new Animal;
lion.play();
console.log(lion);

// vaghty parametre constructor meghdar dashte beshe az aval, mishavad parametr ra khli gozasht ya number delkhah ra dad

let fox = new Animal(34, 56);
console.log(fox);

