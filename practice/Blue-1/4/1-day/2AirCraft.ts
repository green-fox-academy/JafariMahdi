'use strict';

import { getHeapStatistics } from "v8";

export abstract class Aircraft {

  maxAmmo: number;
  baseDamage: number;
  ammoStorage: number = 0;
  currentAmmo: number = 0;

  fight() {
    let damage = this.baseDamage * this.ammoStorage;
    return damage
  }

  refill(amount: number) {
    if amount > this.ammoStorage {
      amount = this.ammoStorage;
    }
    this.currentAmmo += amount;
    this.ammoStoreg -= amount;
  }

  gettype() {
    return this.constructor.name
  }

  getStatus() {

    return `Type ${this.gettype()}, Ammo: ${this.ammoStorage}, Base Damege: ${this.baseDamage}, All Damage: ${ this.fight()}`
  }

  abstract isPriority(): boolean
}

class F16 extends Aircraft {

  constructor() {
    super()
    this.maxAmmo = 8;
    this.baseDamage = 30;
    //this.ammoStoreg;
    //this.damage = this.maxAmmo * this.ammoStoreg;
  }
  isPriority(): boolean {
    return false
  }
}

class F35 extends Aircraft {

  constructor() {
    super()
    this.maxAmmo = 12;
    this.baseDamage = 50;
    this.ammoStoreg;
    //this.damage = this.maxAmmo * this.ammoStoreg;
  }

  isPriority(): boolean {
    return true
  }
}
let eagle = new F16()
eagle.getStatus();
eagle.isPriority();


export { F16, F35 }
//----------------------------------------------------

/*



class Carrier {

  airCrafts: Aircraft[] = [];
  ammo: number;
  healthPoint: number;

  constructor(ammo, helthPoint) {
    this.ammo = ammo;
    this.healthPoint = helthPoint;
  }

  add(airCar: Aircraft) {
    this.airCrafts.push(airCar)
  }

  fill() {
    if (this.ammo <= 0) { throw new Error('emmo is 0') }

    let quoteForFill = [];
    let allAirCraftsAmmount = 0;

    for (let aircraft of this.airCrafts) {
      allAirCraftsAmmount += (aircraft.maxAmmo - aircraft.ammoStoreg)
      if (allAirCraftsAmmount > this.ammo) {
        if (aircraft.isPriority()) {
          quoteForFill.unshift(aircraft)
        } else {
          quoteForFill.push(aircraft)
        }

      }
    }
    for (let i = 0; i < quoteForFill.length; i++) { quoteForFill[i].refill(this.ammo) }
  }

  fight(enemy: Carrier) {
    let carierDamage = 0;
    for (let aircraft of this.airCrafts) {
      carierDamage += aircraft.damage
    }
    enemy.healthPoint -= carierDamage;


  }

}

*/

