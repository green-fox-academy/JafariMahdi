' use strict';

// Create an Animal class
// Every animal has a hunger value, which is a whole number
// Every animal has a thirst value, which is a whole number
// when creating a new animal object these values are created with the default 50 value
// Every animal can eat() which decreases their hunger by one
// Every animal can drink() which decreases their thirst by one
// Every animal can play() which increases both by one


class Animal {
    hangur: number;
    thirsty: number;
   

    constructor() {
        this.hangur = 50;
        this.thirsty = 50;
    }
    eat(){                                  // we make function thats working whit our new object and call for change them 
        this.hangur --;
    }
    drink(){
        this.thirsty --;
    }
    play(){
        this.hangur ++;
        this.thirsty ++;
    }
}
let dog = new Animal();                 // new object
dog.eat();                          // call the function for the new object
dog.eat();
dog.hangur; // 48
console.log(dog);
