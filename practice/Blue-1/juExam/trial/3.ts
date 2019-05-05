'use strict';

class Pirate {
  name: string;
  gold: number;
  healthPoint: number;
  capitan: boolean;
  woodLeg: boolean;

  constructor(name: string, capitan?: boolean, woodLeg?: boolean) {
    this.name = name;
    this.capitan = capitan;
    this.gold = 10;
    this.healthPoint = 10;
    this.woodLeg = woodLeg;
  }

  work() {
    if (this.capitan) { this.gold += 10, this.healthPoint -= 5 }
    else { this.gold += 1, this.healthPoint -= 1 }
  }

  party() {
    if (this.capitan) { this.healthPoint += 10 }
    else { this.healthPoint += 1 }
  }

  haveLeg() {
    let out;
    if (this.woodLeg) { out = `Hello, I'm${this.name} I have a wood leg and ${this.gold} Golds` }
    else { out = `Hello, I'm ${this.name}, I have my real leg and ${this.gold} Golds` }
    return out
  }
}


class Ship {
  pirates: Pirate[] = [];

  add(person: Pirate) {
    if (!person.capitan) { this.pirates.push(person) }
    else {
      for (let element of this.pirates) {
        if (!element.capitan) {
          this.pirates.push(person)
        } else {
          return 'the ship can have just one Capitan'
        }
      }
    }
  }

  getPoorPirats() {
    let poor = []
    for (let element of this.pirates) {
      if (element.gold < 15 && element.woodLeg) {
        poor.push(element)
      }
      return poor
    }
  }

  getGolds() {
    let allGolds = 0;
    for (let element of this.pirates) { allGolds += element.gold }
    return allGolds
  }

  lastDay() {
    for (let element of this.pirates) { element.party() }
  }

  preparForBattle() {
    for (let i = 0; i < 5; i++) {
      for (let element of this.pirates) { element.work() }
    }
    this.lastDay();
  }
}