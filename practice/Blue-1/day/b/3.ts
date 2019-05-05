'use strict';

abstract class Animal {
  name: string;
  healthPoint: boolean;
  healCost;

  constructor(name: string) { this.name = name }

  heal(): boolean {
    return this.healthPoint = true;
  }
  isAdoptable(): boolean {
    return this.healthPoint ? true : false;
  }
  toString() {
    if (!this.healthPoint) {
      return `${this.name}, is not healthy ${this.healCost}, and not adobtable `;
    } else {
      return `${this.name}, is healthy ${this.healCost}, and adobtable`;
    }
  }
}
class Cats extends Animal {
  healCost: number = Math.floor(Math.random() * 7);

}
class Dogs extends Animal {
  healCost: number = Math.floor(Math.random() * 7) + 1;
}
class Parrots extends Animal {
  healCost: number = Math.floor(Math.random() * 6) + 4;
}

class Shelter {
  animals: Animal[];
  budget: number;
  adopters: string[] = [];

  rescue(animal: Animal) {
    this.animals.push(animal)
    return this.animals.length
  }
  heal() {
    let notHealthy = [];
    for (let animal of this.animals) {
      if (!animal.isAdoptable()) { notHealthy.push(animal) }
    }
    if (this.budget > 0) { notHealthy[0].heal() }
  }

  addAdopter(name: string) {
    this.adopters.push(name)
  }
  findNewOwner() {
    let newOwner = []
    let randomName = this.adopters[Math.floor(Math.random() * this.adopters.length)];
    let randomAnimal = this.animals[Math.floor(Math.random() * this.animals.length)];
    newOwner.push([randomName, randomAnimal])
  }
  earnDonation(amount: number) {
    this.budget += amount;
    return this.budget;
  }
  toString() {
    let result = `Budget: ${this.budget}$, There are ${this.animals.length}, animals and ${this.adopters.length}, potantion adopters `
    for (let animal of this.animals) {
      result += animal.toString();
    }
    return result;
  }

}