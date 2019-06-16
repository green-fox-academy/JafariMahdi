'use strict';
/*
*Reuse your Animal class
*Create a Farm class
  .it has list of Animals
  .it has slots which defines the number of free places for animals
  .breed() -> creates a new animal if there's place for it
  .slaughter() -> removes the least hungry animal */

import { Animal } from './Animal'

class Farm {
  animals: Animal[] = [];
  freePlace: number;

  constructor(freePlace) { this.freePlace = freePlace }

  breed(input) {
    if (this.animals.length >= this.freePlace) {
       console.log('sorry there is no place')
    }
    else { this.animals.push(input) }
  }

  slaughter() {
    let mostHungry = this.animals.sort(function (a, b) {
      return a.hunger - b.hunger
    });
    mostHungry.shift();
    this.freePlace++;
  }
}
let myFarm = new Farm(4);

// make Animal and add regular way
let rosster = new Animal(3,5);
let sheap = new Animal(3,9);

myFarm.animals=[rosster,sheap];



// add the animal by method
let duck = new Animal(2, 34);
let dog = new Animal(12, 16);
myFarm.breed(duck);
myFarm.breed(dog);


myFarm.slaughter();

console.log(myFarm.animals);



