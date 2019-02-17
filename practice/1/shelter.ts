'use strict';

// Create an animal shelter where we can save and take care of Animals
//
// An Animal
// -  has a `name` and stores it's health state in a boolean
// -  has a `healCost` field
// -  has a method named `heal()`, that sets the `isHealthy` field's status to true
// -  has a method named `isAdoptable` that returns a boolean value whether it can be adopted or not (an animal
//    can be adopted if it is healthy)
// -  has a method named `toString()` that represents the Animal in the following format:
// <name> is not healthy (<heal cost>€), and not adoptable
// <name> is healthy, and adoptable
// The animal's name is the same as the class name by default, but it can be set trough constructor as well
// 
// We are working with 3 types of Animals
// -  Cat's healing cost should be a random number between 0 and 6
// -  Dog's healing cost should be a random number between 1 and 8
// -  Parrot's healing cost should be a random number between 4 and 10
//


class Utils {
  public static getARandomNumber(min: number = 0, max: number = 1) {
    return Math.floor(Math.random() * (max - min) + min);
  }
}

class Animal {
  public name: string;
  public isHealthy: boolean;
  public healCost: number;
  
  public constructor(pName: string = 'Animal') {
    this.name = pName;
  }
  
  public heal(): void {
    this.isHealthy = true;
  }
  
  public isAdoptable(): boolean {
    return this.isHealthy;
  }
  
  public setHealingCost(min: number = 0, max: number = 1): void {
    this.healCost = Utils.getARandomNumber(min, max);
  }
  
  public toString(): string {
    // if(this.isAdoptable() === true) {}
    if (this.isHealthy === true) {
      return `${this.name} is healthy, and adoptable`;
    } else {
      return `${this.name} is not healthy (${this.healCost}€), and not adoptable`;
    }
  }
}

class Cat extends Animal {
  public constructor(pName: string = 'Cat') {
    super(pName);
    this.setHealingCost(0, 6);
  }
}

class Dog extends Animal {
  public constructor(pName: string = 'Dog') {
    super(pName);
    this.setHealingCost(1, 8);
  }
}

class Parrot extends Animal {
  public constructor(pName: string = 'Parrot') {
    super(pName);
    this.setHealingCost(4, 10);
  }
}

// An AnimalShelter 
// -  has a `budget`
// -  has an `animals` list
// -  has an `adopters` name list
// -  has a method named `rescue(animal)` this method takes an Animal object as parameter and add the animal 
//    to the shelter's list and return the size of the list
// -  has a method named `heal()` this method heals the first not healthy Animal, if it is possible by budget,
//    returns the amount of healed animals(0 or 1)
// -  has a method named `addAdopter(name)` this method takes a string as parameter and save it as a potential new owner
// -  has a method named `findNewOwner()` this method pairs a random name with a random adoptable Animal if it is possible
//    and remove both of them from the lists
// -  has a method named `earnDonation(amount)` this method takes a whole number as parameter and increase the shelter's
//    budget by the parameter's value and returns the current budget
// -  has a method named `toString()` that represents the shelter in the following format:
// Budget: <budget>€, There are <animals.count> animal(s) and <potentionalAdopters.count> potential adopter(s)
// <name> is not healthy (<heal cost>€), and not adoptable
// <name> is healthy, and adoptable
//
// The shelter starts with 50€ without any Animal and adopter
// 

class AnimalShelter {
  private budget: number;
  private animals: Animal[];
  private adopters: string[];

  public constructor(
    pBudget: number = 50,
  ) {
    this.budget = pBudget;
    this.animals = [];
    this.adopters = [];
  }

  public rescue(animal: Animal): number {
    this.animals.push(animal);
    return this.animals.length;
  }

  public heal(): number {
    let someoneHealed: number = null;

    this.animals.forEach(function (animal: Animal, index: number): void {
      if (
        someoneHealed === null && // we haven't healed any animal yet on this run
        animal.isHealthy !== true && // we can heal this particular / current animal
        this.budget >= animal.healCost // the shelter has enough money for treatment
      ) {
        animal.heal();
        this.budget -= animal.healCost;
        someoneHealed = index;
      }
    }.bind(this)); // we are binding the Shelter instance to the forEach function

    return someoneHealed === null ? 0 : 1;
  }

  public addAdopter(name: string): void {
    this.adopters.push(name);
  }

  public findNewOwner(): void {
    const randomAdopterNumber: number = this.getRandomAdopterNumber();
    const randomAnimalName: string = this.getRandomAdoptableAnimalName();

    if (
      randomAdopterNumber !== null &&
      randomAnimalName !== ''
    ) {
      this.removeAdopterByIndex(randomAdopterNumber);
      this.removeAnimalByName(randomAnimalName);
    }
  }

  private getRandomAdopterNumber(): number {
    let ownerNumber: number = null;

    if (this.adopters.length > 0) {
      ownerNumber = Utils.getARandomNumber(0, this.adopters.length - 1);
    }

    return ownerNumber;
  }

  private getRandomAdoptableAnimalName(): string {
    let randomAdoptableAnimalNumber: number = null;

    const adoptAbleAnimals = this.animals.filter(function (currentAnimal: Animal): boolean {
      return currentAnimal.isAdoptable() === true;
    })

    if (adoptAbleAnimals.length > 0) {
      randomAdoptableAnimalNumber = Utils.getARandomNumber(0, adoptAbleAnimals.length - 1)
    }

    if (randomAdoptableAnimalNumber !== null) {
      return adoptAbleAnimals[randomAdoptableAnimalNumber].name;
    } else {
      return '';
    }
  }

  private removeAdopterByIndex(index: number): void {
    if (typeof this.adopters[index] !== 'undefined') {
      this.adopters.splice(index, 1);
    }
  }

  private removeAnimalByName(name: string): void {
    let animalNumberToRemove: number = null;

    this.animals.forEach(function (animal: Animal, index: number): void {
      if (animal.name === name) {
        animalNumberToRemove = index;
      }
    });

    if (animalNumberToRemove !== null) {
      this.animals.splice(animalNumberToRemove, 1);
    }
  }

  public earnDonation(amount: number): number {
    this.budget += parseInt(String(amount), 10);
    return this.budget;
  }

  public toString(): string {
    const budget = `${this.budget}€, There are ${this.animals.length} animal(s) and ${this.adopters.length} potential adopter(s)`;
    const animals = this.animals.map(function (animal: Animal): string {
      return animal.toString();
    });

    return [budget].concat(animals).join('\n');
  }
}











let animalShelter = new AnimalShelter();

animalShelter.rescue(new Cat());
animalShelter.rescue(new Dog("Furkesz"));
animalShelter.rescue(new Parrot());
console.log(animalShelter.toString());
// Budget: 50€, There are 3 animal(s) and 0 potential adopter(s)
// Cat is not healthy (3€) and not adoptable
// Furkesz is not healthy (1€) and not adoptable
// Parrot is not healthy (7€) and not adoptable

animalShelter.heal();
console.log(animalShelter.toString());
// Budget: 47€, There are 3 animal(s) and 0 potential adopter(s)
// Cat is healthy and adoptable
// Furkesz is not healthy (1€) and not adoptable
// Parrot is not healthy (7€) and not adoptable     

animalShelter.addAdopter("Kond");
console.log(animalShelter.toString());
// Budget: 47€, There are 3 animal(s) and 1 potential adopter(s)
// Cat is healthy and adoptable
// Furkesz is not healthy (1€) and not adoptable
// Parrot is not healthy (7€) and not adoptable

animalShelter.findNewOwner();
animalShelter.earnDonation(30);
console.log(animalShelter.toString());
// Budget: 77€, There are 2 animal(s) and 0 potential adopter(s)
// Furkesz is not healthy (1€) and not adoptable
// Parrot is not healthy (7€) and not adoptable

