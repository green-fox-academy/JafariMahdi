'use strict';


class Pirat {
  name: string;
  healthPoint: number;
  amoountOfGold: number;
  capitan: boolean;
  woodenleg: boolean;

  constructor(name: string, health: number = 10, Gold: number = 10, capitan: boolean = false, woodLeg?: boolean) {
    this.name = name;
    this.healthPoint = health;
    this.amoountOfGold = Gold;
    this.woodenleg = woodLeg;
    this.capitan = capitan;
  }
  work() {
    if (this.capitan) {
      this.amoountOfGold += 10;
      this.healthPoint -= 5;
    }
    else {
      this.amoountOfGold++;
      this.healthPoint--;
    }
  }

  party() {
    if (this.capitan) {
      this.healthPoint += 10;
    }
    else { this.healthPoint++ }
  }

  woodLeg() {
    if (this.woodenleg) {
      return `Hello,I am ${this.name},I have a wooden leg and ${this.amoountOfGold}, Golds. `
    } else {
      return `Hello, I am ${this.name},I have my real lag and ${this.amoountOfGold}, Golds.`
    }
  }
}

class Ship {
  pirates: Pirat[] = [];

  add(pirate: Pirat) {
    if (!pirate.capitan) { this.pirates.push(pirate) }
    else {
      for (let person of this.pirates) {
        if (!person.capitan) {
          this.pirates.push(person)
        }
        else {
          return 'sorry there is one capitan'
        }
      }
    }
  }

  getPoorPirates() {
    let poorPirate = [];
    for (let pirate of this.pirates) {
      if (pirate.woodenleg && pirate.amoountOfGold < 15) { poorPirate.push(pirate) }
    }
    return poorPirate;
  }
  getGolds() {
    let allTheGolds: number;
    for (let pirate of this.pirates) {
      allTheGolds += pirate.amoountOfGold;
    }
    return allTheGolds;
  }

  lastDayOnTheShip() {
    for (let pirate of this.pirates) {
      pirate.party();
    }
  }
  prepareForBattle() {
    for (let i = 0; i < 5; i++) {
      this.pirates.forEach(pirate => {
        pirate.work();
      })
    }

    this.lastDayOnTheShip();
  }

}

// baraye seda kardan method dakhele kelass faghat esmash ra seda bezanid kafi hat => this.method()