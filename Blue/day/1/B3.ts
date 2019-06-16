'use strict';

class Pirate {
  name: string;
  gold: number;
  helthPoint: number;
  capitan: boolean;
  woodyLeg: boolean;

  work() {
    if (this.capitan) { this.gold += 10, this.helthPoint -= 5 }
    else { this.gold += 1, this.helthPoint -= 1 }
  }
  party() {
    if (this.capitan) { this.helthPoint += 10 }
    else { this.helthPoint += 1 }
  }
  haswoodleg() {
    if (this.woodyLeg) { return `Hello, I am ${this.name}, and I have wood leg and ${this.gold}, Golds` }
    else { return `Hello, I am ${this.name}, and I have my real leg and ${this.gold}, Golds` }
  }
}

class Ship {
  pirets: Pirate[] = [];

  add(pirate: Pirate) { this.pirets.push(pirate) }

  getPoorPirats() {
    let poor = [];
    for (let item of this.pirets) {
      if (item.gold < 15 && item.woodyLeg) {
        poor.push(item)
      }
    }
  }
  getGolds() {
    let allGolds = 0;
    for (let pirate of this.pirets) { allGolds += pirate.gold } return allGolds
  }
  lastDayOnShip() {
    for (let pirate of this.pirets) { pirate.party() }
  }
  preapareForTheBattle() {
    for (let i = 0; i < 5; i++) {
      for (let item of this.pirets) {
        item.work();
      }
    }
    this.lastDayOnShip();
  }
}