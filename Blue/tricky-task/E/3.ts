'use strict';

abstract class Animal {
  name: string;
  health: boolean;
  healCost: number;

  heal() {
    this.health = true;
  }
  isAdoptAble() {
    return this.health
  }
  toString() {
    let out;
    if (this.health === false) { out = `${this.name}, is not healthy ${this.healCost}$, and not adoptable` }
    else { out = `${this.name}, is healthy and is adoptable ` }
    return out
  }
}

class Cat extends Animal {
  name: string;
  health: boolean;
  healCost: number;

  constructor(name: string, health: boolean) {
    super()
    this.name = name;
    this.healCost = Math.floor(Math.random() * 6 + 1);
    this.health = health;
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
  budget: number = 50;
  animals: Animal[] = [];
  adopters: any = [];


  rescue(animal: Animal) {
    this.animals.push(animal)
    return this.animals.length
  }

  heal() {
    let makeHealthy = 0;
    let firest = this.animals.find(element => element.health === false)
    if (this.budget > firest.healCost) { this.budget -= firest.healCost, firest.healCost = 0, firest.heal(), makeHealthy++ }
    return makeHealthy;
  }

  addAdopter(name: string) {
    this.adopters.push(name)
  }

  findNewOwner() {
    let owner = this.adopters[Math.floor(Math.random() * this.adopters.length)]
    let animal = this.animals[Math.floor(Math.random() * this.animals.length)]
    this.adopters.splice(this.adopters.indexOf(owner), 1)
    this.animals.splice(this.animals.indexOf(animal), 1)

    return `${owner} is new owner for:${animal.name}`
  }

  earnDonation(amount: number) {
    this.budget += amount;
    return this.budget
  }

  toString() {
    let result = `Budget: ${this.budget}$, There are ${this.animals.length}, animals and ${this.adopters.length}, potantional Adopters. `
    for (let animal of this.animals) {
      result += '\n' + animal.toString();
    }
    return result
  }
}


let AnimalShelter = new Shelter()
AnimalShelter.rescue(new Cat('tomi', false))
AnimalShelter.rescue(new Dog('pet', false))
AnimalShelter.rescue(new Parrot('kiri', false))

console.log(AnimalShelter.toString());
console.log('--------------------');


AnimalShelter.heal();
console.log(AnimalShelter.toString());
console.log('--------------------');


AnimalShelter.addAdopter('Mate');
console.log(AnimalShelter.toString());
console.log('--------------------');

console.log(AnimalShelter.findNewOwner());
console.log(AnimalShelter.toString());
console.log('--------------------');

AnimalShelter.earnDonation(30)
console.log(AnimalShelter.toString());