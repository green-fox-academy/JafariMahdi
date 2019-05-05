'use strict';

abstract class Animal {
  name: string;
  health: boolean;
  healCost;

  heal() {
    this.health = true;
  }

  isAdoptable() {
    return this.health
  }

  toString() {
    if (this.health === false) { return `${this.name}, is not healthy ${this.healCost}$ and not adoptable` }
    else { return `${this.name}, is healthy and adoptable` }
  }
}

class Cat extends Animal {
  name: string;
  health: boolean;
  healCost: number;

  constructor(name: string, health: boolean) {
    super()
    this.name = name;
    this.health = health;
    this.healCost = Math.floor(Math.random() * 6 + 1);
  }
}
class Dog extends Animal {
  name: string;
  health: boolean;
  healCost: number;

  constructor(name: string, health: boolean) {
    super()
    this.name = name;
    this.health = health;
    this.healCost = Math.floor(Math.random() * 8) + 1;
  }
}

class Parrot extends Animal {
  name: string;
  health: boolean;
  healCost: number;

  constructor(name: string, health: boolean) {
    super()
    this.name = name;
    this.health = health;
    this.healCost = Math.floor(Math.random() * (10 - 4 + 1)) + 4;
  }
}

class Shelter {
  badgut;
  animals: Animal[] = [];
  adopters: string[] = [];

  constructor(badget: number = 50) {
    this.badgut = badget
  }
  rescue(animal: Animal) {
    this.animals.push(animal)
    return this.animals.length;
  }

  heal() {
    let amountOfHeal = 0;
    let first = this.animals.find(function (element) { return element.health === false });
    if (this.badgut > first.healCost) { this.badgut -= first.healCost, first.healCost = 0, first.heal(), amountOfHeal++ }
    return amountOfHeal;
  }

  addAdopter(name: string) {
    this.adopters.push(name)
  }

  findNewOwner() {
    if (this.adopters.length <= 0 || this.animals.length <= 0) { return `list is empty` }
    let owner = this.adopters[Math.floor(Math.random() * this.adopters.length)];
    let animal = this.animals[Math.floor(Math.random() * this.animals.length)];
    let deleteOwner = this.adopters.indexOf(owner)
    let deletAnimal = this.animals.indexOf(animal)
    this.adopters.splice(deleteOwner, 1);
    this.animals.splice(deletAnimal, 1)
  }

  earnDonation(amount: number) {
    this.badgut += amount;
    return this.badgut
  }

  toString() {
    let result = `Budget: ${this.badgut}$, there are ${this.animals.length}, animal(s) and ${this.adopters.length}, potantial adopter(s)`

    for (let animal of this.animals) {
      result += '\n' + animal.toString();
    }
    return result
  }
}

let animalShelter = new Shelter()

animalShelter.rescue(new Dog('pet', false))
animalShelter.rescue(new Cat('tom', false))
animalShelter.rescue(new Parrot('tipy', false))

console.log(animalShelter.toString())
console.log('-------------------');

animalShelter.heal()
console.log(animalShelter.toString());
console.log('-------------------');

animalShelter.addAdopter('Peter')
console.log(animalShelter.toString());
console.log('-------------------');

animalShelter.findNewOwner();
animalShelter.earnDonation(30)
console.log(animalShelter.toString());






