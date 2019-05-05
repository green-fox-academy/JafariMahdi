import { Aircraft, F16, F35 } from './2AirCraft'

class Carreir {
  airCrafts: Aircraft[] = [];
  ammostore;
  healthPoint;

  constructor(ammo, haelthpoint) {
    this.ammostore = ammo;
    this.healthPoint = haelthpoint;
    this.airCrafts;
  }

  add(newCraft: Aircraft) {
    this.airCrafts.push(newCraft)
  }

  fill() {
    if (this.ammostore <= 0) { throw new Error('there is no more emmo') }
    // -----------------------------------

    let needAmount = 0;
    let piorityList = []

    for (let aircraft of this.airCrafts) {
      needAmount += (aircraft.maxAmmo - aircraft.ammoStorage);

      if (this.ammostore < needAmount) {
        if (aircraft.isPriority()) {
          piorityList.unshift(aircraft)  // push true in the begining of list and fals in the end of th list
        } else {
          piorityList.push(aircraft)
        }
      }
    }

    for (let i = 0; i < piorityList.length; i++) {       // reflil from the  0  for piority
      this.ammostore = piorityList[i].refill(this.ammostore)
    }
    // return this.ammostore -= needAmount;
  }


  fight(carier: Carreir) {
    for (let aircraft of this.airCrafts) {
      aircraft.fight() - carier.healthPoint
    }
  }

  getstatus() {
    let totalDamage = 0;
    for (let item of this.airCrafts) {
      totalDamage += (item.fight())
    }

    let result: any = [];

    if (this.healthPoint <= 0) {
      return `it's daed Jim :( `
    } else {
      result += `${this.healthPoint}, AirCraft cont ${this.airCrafts.length}, Ammo Storeg: ${this.ammostore}, Tootal Damage: ${totalDamage} 
      Air Craft:\n`
      for (let aircraft of this.airCrafts) {
        result += aircraft.getStatus() + '\n';
      }
      return result
    }

  }
}

let Ashiyane = new Carreir(200, 3000);

let tiger = new F16()
tiger.refill(300)
tiger.getStatus()
Ashiyane.add(tiger)

let eagle = new F16()
Ashiyane.add(eagle)

let shahin = new F35();
Ashiyane.add(shahin);

Ashiyane.fill()

console.log(Ashiyane.getstatus());






