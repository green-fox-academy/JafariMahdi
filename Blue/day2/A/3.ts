
class Pirat {
  name: string;
  amountOfGold: number = 10;
  healthPoint: number = 10;
  capitan: boolean;
  woodLeg: boolean;

  constructor(name: string, capitan: boolean, woodleg: boolean) {
    this.name = name;
    this.capitan = capitan;
    this.woodLeg = woodleg;
  }

  work() {
    if (this.capitan) {
      this.amountOfGold += 10;
      this.healthPoint -= 5;
    }
    else {
      this.amountOfGold += 1;
      this.healthPoint -= 1;
    }
  }

  party() {
    if (this.capitan) {
      this.healthPoint += 10;
    }
    else {
      this.healthPoint += 1;
    }
  }
  hasWoodLeg() {
    if (this.woodLeg) { return `-HELLO I'm ${this.name}. I have wooden leg and ${this.amountOfGold} Golds` }
    else { return `-HELLo I'm ${this.name}. I still have my real leag and ${this.amountOfGold} Golds` }
  }
}
//   ---------------------------------------

class Ship {
  listOfPirats: Pirat[] = [];

  add(addPirats: Pirat) {  //   <=  debuging 
    if (!addPirats.capitan) {
      this.listOfPirats.push(addPirats)
    } else {
      this.listOfPirats.forEach(element => {

      })
    }
  }


  getPoorPirats() {
    let poorPirats: string[] = [];
    this.listOfPirats.forEach(pirat => {
      if ((pirat.woodLeg) && pirat.amountOfGold < 15) {
        poorPirats.push(pirat.name)
      }
    })
    return poorPirats
  }

  getGold() {
    let goldsInShip: number = 0;
    this.listOfPirats.forEach(pirat => {
      goldsInShip += pirat.amountOfGold;
    })
    return goldsInShip
  }

  lastDayOnTheShip() {
    this.listOfPirats.forEach(pirat => {
      pirat.party();
    })
  }

  preparForTheBattle() {
    this.listOfPirats.forEach(pirat => {
      for (let i = 0; i < 5; i++) {
        pirat.work();
      }
    })
    this.lastDayOnTheShip();
  }


}

let seeDog = new Ship();

let jack = new Pirat('jack', false, false);
seeDog.add(jack);
let sara = new Pirat('sara', false, false);
seeDog.add(sara);
let adam = new Pirat('adam', false, false);
seeDog.add(adam)
let james = new Pirat('james', false, false);
seeDog.add(james)
let gabi = new Pirat('gabi', false, true)
seeDog.add(gabi)

console.log(seeDog);

console.log(seeDog.getPoorPirats());
