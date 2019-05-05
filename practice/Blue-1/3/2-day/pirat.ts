'use strict';

export class Pirat {
  name: string;
  alcholLevel: number;
  alive: boolean;

  constructor(name, alcholLevel = 0, alive = true) {
    this.name = name;
    this.alcholLevel = alcholLevel;

  }

  drinksomeRum() {
    this.alcholLevel++
  }
  howItGoingMate() {
    if (this.alcholLevel <= 4) {
      return "Pour me anudder!"
    } else {
      this.alive = false
      return "Arghh, I'ma Pirate. How d'ya d'ink its goin?"
    }
  }
  die() {
    this.alive = false
    return `he is dead`
  }
  brawl(otherPirat) {
    if (otherPirat.alive === true) {
      let chance = Math.floor(Math.random() * 3)
      if (chance === 0) { otherPirat.alive = false }
      else if (chance === 1) { this.alive = false }
      else { this.alive = false, otherPirat.alive = false }
    }
    else { return `${otherPirat.name} is alredy dead` }
  }
}

let jack = new Pirat('jack')

