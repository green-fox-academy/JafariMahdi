'use strict';

class Plant {

  color: string;
  type: string;
  thirsty: boolean = true;
  levelThirsty: number=0;

  constructor(color, type) {
    this.color = color;
    this.type = type;
  }
}
//  ----------------------------------------

class Flower extends Plant {

  constructor(color, type) {
    super(color, type);
    this.levelThirsty = 0;
    this.thirsty = true;
  }

  needsWater(): boolean {
    if (this.levelThirsty < 5) {
      console.log(`The ${this.color} ${this.type} need water`);
      return this.thirsty
    }
    else {
      this.thirsty = false;
      console.log(`The ${this.color} ${this.type} dosen't need water`);
      return this.thirsty
    }
  }

  watering(amount) {
    this.levelThirsty += (amount / 4) * 3;
  }
}
//  -------------------------------------------

class Tree extends Plant {

  levelThirsty: number;

  constructor(color, type, levelThirsty = 0) {
    super(color, type);
    this.levelThirsty = levelThirsty;
    this.thirsty = true;
  }

  needsWater(): boolean {
    if (this.levelThirsty <= 10) {
      console.log(`The ${this.color} ${this.type} is need water`);
      return this.thirsty
    }
    else {
      console.log(`The ${this.color} ${this.type} dosen't  need water`);
      this.thirsty = false
      return this.thirsty
    }
  }

  watering(amount) {
    this.levelThirsty += (amount / 5) * 2;
  }
}
//  ------------------------------------

class Garden {

  plants: Plant[] = [];

  add(plant) {
    this.plants.push(plant);
  }

  watering(AmountWater) {
    var whoNeed = []
    for (let item of this.plants) {
      if (item.thirsty) {
        whoNeed.push(item)
      }
      let amountWater = AmountWater / whoNeed.length 
      item.levelThirsty += amountWater;
      
     // console.log(item.levelThirsty);
    }
  }


}

let greenGarden = new Garden();

let yellow = new Flower('yellow','Flower');
greenGarden.add(yellow);

let blue = new Flower('blue','Flower');
greenGarden.add(blue);

let orange = new Tree ('Orange','Tree');
greenGarden.add(orange);

let purple = new Tree ('Purple','Tree');
greenGarden.add(purple);

greenGarden.watering(40);

console.log(greenGarden);


yellow.needsWater();
blue.needsWater();
orange.needsWater();
purple.needsWater();

// 1- dar constractur faght elementhaye ke parametr gerfte ra tozih bedeh
