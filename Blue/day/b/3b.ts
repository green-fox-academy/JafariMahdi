'use strict';

class Animal {
  name: string;
  healthy: boolean;
  healCost;

  constructor(name: string) {
    this.name = name;
  }
  heal() {
    this.healthy = true;
  }
  isAdoptable(): boolean {
    return this.healthy ? true : false
  }
  toString() {
    if (!this.healthy) { return `${this.name}, is not healthy ${this.healCost} and not adoptable` }
    else { return `${this.name}, is healthy and doptable` }
  }
}
class Cat extends Animal {
  healCost: number;
  constructor(name: string) {
    super(name)
    this.healCost = Math.floor(Math.random() * 7);
  }
}

class Dog extends Animal {
  healCost: number;

  constructor(name: string) {
    super(name)
    this.healCost = Math.floor(Math.random() * 8 - 1) + 1;
  }
}
class Parrot extends Animal {
  healCost: number;

  constructor(name: string) {
    super(name)
    this.healCost = Math.floor(Math.random() * 10 - 4) + 4;
  }
}

class Shelter {
  budget: number;
  animals: Animal[] = [];
  adopters: string[] = [];

  rescue(animal: Animal) {
    this.animals.push(animal)
    return this.animals.length
  }
  heal() {
    let find = this.animals.find(function (element) {
      return (!element.healthy);
    })
    find.heal();
  }

  hasAdopter(name: string) {
    this.adopters.push(name)
  }
  findNewOwner() {
    let ownerAndAnimal = [];
    let animal = this.animals[Math.floor(Math.random() * this.animals.length)]
    let owner = this.adopters[Math.floor(Math.random() * this.adopters.length)]
    ownerAndAnimal.push([animal, owner])
  }
  earnDonation(amount: number) {
    this.budget += amount;
    return this.budget
  }
  toString() {
    let out = `Budget: ${this.budget} there are ${this.animals.length} animal's and ${this.adopters.length}, potantion adoptable `

    for (let item of this.animals) {
      out += item.toString(),'\n';
    }
  }
}

