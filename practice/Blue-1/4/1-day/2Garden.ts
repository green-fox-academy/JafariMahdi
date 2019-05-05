
class Plant {
  type: string;
  color: string;
  waterAmount: number;
  absorb: number;
  waterBase: number;

  constructor(type, color, wateramount, absorb) {
    this.type = type;
    this.color = color;
    this.waterAmount = wateramount;
    this.absorb = absorb;
    this.waterBase = 0;
  }

  needsWater() {
    return this.waterBase < this.waterAmount
  }

  water(amount) {
    this.waterBase += amount
  }
}

class Flower extends Plant {

  constructor(type, color) {
    super('flower', color, 5, 0.75);
  }
}

class Tree extends Plant {

  constructor(type, color) {
    super('tree', color, 10, 0.4);
  }
}

class Garden {
  plants: Plant[] = [];

  add(someplant) {
    this.plants.push(someplant);
  }

  watring(amount) {

    let whoNeedWater = [];

    for (let plant of this.plants) {
      if (plant.waterBase < plant.waterAmount) {
        whoNeedWater.push(plant)
      }
    }

    let dividingWater = amount / whoNeedWater.length;
    for (let plant of whoNeedWater) {
      plant.waterBase += (dividingWater * plant.absorb)
    }

    for (let plant of this.plants) {
      if (plant.waterBase < plant.waterAmount) {
        console.log(`The ${plant.color} ${plant.type} needs water`);
      }
      else {
        console.log(`The ${plant.color} ${plant.type} dosn't need water`);
      }
    }

  }
}

let redGarden = new Garden();

let yellow = new Flower('flower', 'yellow');
redGarden.add(yellow);
let blue = new Flower('flower', 'blue');
redGarden.add(blue);

let purple = new Tree('Tree', 'purple');
redGarden.add(purple);
let orange = new Tree('Tree', 'orange');
redGarden.add(orange);

redGarden.watring(0);
console.log('----- Watring with 40 ------');
redGarden.watring(40);
console.log('---- Watring with 70 ------');
redGarden.watring(70);
//console.log(redGarden);


// vaghti classi ra extands mikonid niyazi nist dobareh field bedahid bedahid faghat dar constructoer sedayesh konid
// dar klass akhar hatman method add bedahid ta rahatar beshavad push kard objectha ro 


