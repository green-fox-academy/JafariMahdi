'use strict';

abstract class Aircraft {
  maxAmmo: number;
  baseDamage: number;
  ammo: number;
  type: string;

  fight() {
    let damage = this.baseDamage * this.ammo;
    this.ammo = undefined
    return damage
  }

  refill(fillammo: number) {
    let needAmmo = this.maxAmmo - this.ammo;
    this.ammo += needAmmo;
    let fill = fillammo - this.ammo;
    return fill
  }

  getType() {
    return this.type
  }
  getStatus() {
    return `Type ${this.type}, Ammo: ${this.ammo}, Base Damage: ${this.baseDamage}, All Damage: ${this.baseDamage * this.ammo}`
  }
  isPrioritry(): boolean {
    return this.type === 'F35' ? true : false;
  }
}
class F16 extends Aircraft {
  maxAmmo: number = 8;
  baseDamage: number = 30
  type: string = 'F16'
}
class F35 extends Aircraft {
  maxAmmo: number = 12;
  baseDamage: number = 50;
  type: string = 'F35'
}

class Carrier {
  aircrafts: Aircraft[];
  carrirStore: number;
  healthpoint: number;

  constructor(carrierStore: number, healthPoint: number) {
    this.carrirStore = carrierStore;
    this.healthpoint = healthPoint;
    this.aircrafts = [];
  }

  add(newAirCraft: Aircraft) {
    this.aircrafts.push(newAirCraft)
  }
  fill() {
    if (this.carrirStore <= 0) {
      throw new Error(' the store is empty')
    }

    let allAirCraftNeed: number = undefined;

    this.aircrafts.forEach(craft => {
      allAirCraftNeed += craft.ammo
    })

    if (this.carrirStore < allAirCraftNeed) {
      let makeLine = [];
      this.aircrafts.forEach(craft => {
        if (craft.isPrioritry()) { makeLine.unshift(craft) }
        else { makeLine.push(craft) }
      })
      for (let i = 0; i < makeLine.length; i++) {
        makeLine[i].refill(this.carrirStore);
      }
    }
    else {
      for (let craft of this.aircrafts) { craft.refill(this.carrirStore) }
    }
  }

  carrierDamage(): number {
    let carrierdamage = undefined;
    this.aircrafts.forEach(element => {
      carrierdamage += element.fight();
    })
    return carrierdamage;
  }

  fight(otherCarrier: Carrier) {
    otherCarrier.healthpoint -= this.carrierDamage();
    this.healthpoint -= otherCarrier.carrierDamage();
  }

  getStatus() {
    if (this.healthpoint <= 0) { return `it's dead Jim, sorry :(` }
    else {
      let result = `HP: ${this.healthpoint}, AirCraft Cont: ${this.aircrafts.length}, Ammo Storeg ${this.carrirStore}, Total Damage: ${this.carrierDamage()} `
      result += '\n AirCrafts:';
      this.aircrafts.forEach(craft => {
        result += '\n' + craft.getStatus();
      })
      return result
    }
  }
}

let carrier1 = new Carrier(2300, 5000);

carrier1.aircrafts = [new F35, new F35, new F35, new F16, new F16];

carrier1.fill();
console.log(carrier1.getStatus());
