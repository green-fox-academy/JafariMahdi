
/*
Create an Animal class
Every animal has a hunger value, which is a whole number
Every animal has a thirst value, which is a whole number
when creating a new animal object these values are created with the default 50 value
Every animal can eat() which decreases their hunger by one
Every animal can drink() which decreases their thirst by one
Every animal can play() which increases both by one */

class Animal {
  hunger: number;
  thirsty: number;
  constructor(hunger = 50, thirsty = 50) {
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
     this.thirsty++ , this.hunger++;
  }
}
/*
let lion = new Animal;
lion.eat();
console.log(lion);

let horse = new Animal;
horse.play();
console.log(horse);

let dolphin = new Animal;
dolphin.drink();
console.log(dolphin);
*/

export { Animal };

