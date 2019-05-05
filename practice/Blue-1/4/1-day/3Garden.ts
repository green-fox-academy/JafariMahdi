interface PlantInterface {
  needsWater(): boolean;
  giveWater(): void;
}
//  ----------------------------------
abstract class Plant implements PlantInterface {
  color: string;
  type: string;
  waterAmount: number;
  absorbtion: number;
  currentWater: number;

  constructor(color: string) {
    this.color = color;
    this.currentWater = 0;
  }

  needsWater(): boolean {
    return (this.currentWater < this.waterAmount);
  }

  giveWater(amount: number) {
    this.currentWater += (amount * this.absorbtion);
  }

  show() {
    let waterMessage = this.needsWater() ? 'needs water' : 'doesn\'t need water';
    console.log(`The ${this.color} ${this.type} ${waterMessage} (${this.currentWater}).`)
  }
}

class Flower extends Plant {
  constructor(color: string) {
    super(color);
    this.type = 'Plant';
    this.waterAmount = 5;
    this.absorbtion = 0.75;
  }
}

class Tree extends Plant {
  constructor(color: string) {
    super(color);
    this.type = 'Tree';
    this.waterAmount = 10;
    this.absorbtion = 0.4;
  }
}

class Garden {
  plants: Plant[];

  constructor(plants: Plant[]) {
    this.plants = plants;
    this.show();
  }

  show() {
    for (let plant of this.plants) {
      plant.show()
    }
    console.log();
  }

  giveWater(amount: number) {
    console.log(`Watering with ${amount}`);

    let plantsThatNeedWater: Plant[] = [];
    for (let plant of this.plants) {
      if (plant.needsWater()) {
        plantsThatNeedWater.push(plant);
      }
    }

    let amountByPlant = amount / plantsThatNeedWater.length;
    for (let plant of plantsThatNeedWater) {
      plant.giveWater(amountByPlant);
    }

    this.show();
  }
}

let garden = new Garden([
  new Flower('yellow'),
  new Flower('blue'),
  new Tree('purple'),
  new Tree('orange'),
]);

garden.giveWater(40);
garden.giveWater(70);