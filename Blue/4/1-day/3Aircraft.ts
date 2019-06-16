'use strict';

abstract class Aircraft {
  maxAmmo;
  baseDamage;
  ammoStoreg;
  type;

  alldamage() {
    let damage = this.baseDamage * this.ammoStoreg
    return damage
  }

  fight() {
    this.ammoStoreg = 0;  // Bugs=> use  Undifeind
    return this.alldamage();
  }

  refill(subtruct: number) {

    let howMannyAmmoNeed = this.maxAmmo - this.ammoStoreg;
    this.ammoStoreg += howMannyAmmoNeed;
    subtruct -= howMannyAmmoNeed;

  }

  getType() {
    return this.type;
  }

  getStatus() {
    return `Type ${this.getType()}, Ammo: ${this.ammoStoreg}, Base Damage: ${this.baseDamage}, All Damage: ${this.alldamage()} `
  }

  abstract isPriority(): boolean

}


class F16 extends Aircraft {
  maxAmmo = 8;
  baseDamage = 30;
  ammoStoreg = 0;
  type = 'F16'

  isPriority(): boolean {
    return false
  }

}


class F35 extends Aircraft {
  maxAmmo = 12;
  baseDamage = 50;
  ammoStoreg = 0;
  type = 'F35'

  isPriority(): boolean {
    return true
  }
}

class Carrier {

  aircrafts: Aircraft[] = [];
  carrierAmmoStore = 0;
  carrierHelthPoint = 0;

  constructor(ammo: number, healthpoint: number) {
    this.carrierAmmoStore = ammo
    this.carrierHelthPoint = healthpoint
  }

  add(memebr: Aircraft) {
    this.aircrafts.push(memebr)
  }

  fill() {

    if (this.carrierAmmoStore <= 0) { throw new Error(' ther is is not more ammo') }

    let allAmmoNeed = 0;
    let lineForPriority = []

    for (let aircraft of this.aircrafts) {
      allAmmoNeed += (aircraft.maxAmmo - aircraft.ammoStoreg)

      if (allAmmoNeed < this.carrierAmmoStore) {
        if (aircraft.isPriority) { lineForPriority.unshift(aircraft) }
        else { lineForPriority.push(aircraft) }
      } else {
        lineForPriority.push(aircraft)
      }
    }
    for (let i = 0; i < lineForPriority.length; i++) {
      lineForPriority[i].refill(this.carrierAmmoStore);
    }
  }

  carrierDamage(): number {
    let allCarrierDamage = 0;
    for (let craft of this.aircrafts) { allCarrierDamage += craft.alldamage() }
    return allCarrierDamage
  }

  fight(otherCarier: Carrier) {

    for (let craft of this.aircrafts) { craft.fight() }
    otherCarier.carrierHelthPoint -= this.carrierDamage();

    for (let othercraft of otherCarier.aircrafts) { othercraft.fight() }
    this.carrierHelthPoint -= otherCarier.carrierDamage();
  }

  getStatus() {
    let result = '';
    if (this.carrierHelthPoint <= 0) { result = "it's dead jim sorry" }
    else {
      result = `HP : ${this.carrierHelthPoint}, AirCraft count: ${this.aircrafts.length}, Ammo Storeg: ${this.carrierAmmoStore}, Total Damage: ${this.carrierDamage()}
AirCraft:\n `
      for (let craft of this.aircrafts) {
        result += craft.getStatus() + '\n';
      }
      return result
    }
  }
}

let carierB = new Carrier(500, 1400)

let A1 = new F16();
carierB.add(A1)
let A2 = [new F35(), new F16(), new F35(), new F16()]
carierB.aircrafts = A2;
carierB.fill();
console.log(carierB.getStatus());

let Eagle = new Carrier(500, 1200);

let B = new F16();
Eagle.add(B)
let B2 = [new F35(), new F16(), new F35()]
Eagle.aircrafts = B2;
Eagle.fill();
console.log(Eagle.getStatus());

carierB.fight(Eagle)

