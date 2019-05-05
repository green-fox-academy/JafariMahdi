

abstract class Aircraft {
  baseDamage: number;
  ammo: number = 0;
  maxAmmo: number;
  allDamage: number = 0;

  fight() {
    return this.allDamage;
  }

  refill(fill) {
 return 288
  }

  getType() {
    return this.constructor.name
  }
  
  getStatus() {
    console.log(`Type ${this.getType()} Ammo ${this.ammo} BaseDamage ${this.baseDamage} AllDamage ${this.allDamage}`)
  }

  abstract isPriority(): boolean  //signature 
}

class F16 extends Aircraft {

  constructor() {
    super()
    this.maxAmmo = 8;
    this.baseDamage = 30;
  }

  isPriority(): boolean {
    return false
  }
}

class F35 extends Aircraft {

  constructor() {
    super();
    this.maxAmmo = 12;
    this.baseDamage = 50;
  }

  isPriority(): boolean {
    return true
  }
}

let myAircraft = new F16();
myAircraft.refill(20);
myAircraft.getStatus();

// --------------------------------------------------------------

class Carrier {
  airCrafts: Aircraft[] = []
  ammo: number;
  healthPoint: number;

  constructor(ammo, health) {
    this.healthPoint = health;
    this.ammo = ammo;
  }

  add(airplane: Aircraft) {
    this.airCrafts.push(airplane)
  }

  fill() {
    if (this.ammo <= 0) {
      throw new Error('there emmo is empty')
    }

    for (let airCraft of this.airCrafts) {
      if (airCraft.isPriority()) {
        this.ammo = airCraft.refill(this.ammo);
      }
    }
    for (let airCraft of this.airCrafts) {
      if (!airCraft.isPriority()) {
        this.ammo = airCraft.refill(this.ammo);
      }
    }

    
    this.airCrafts.filter((a) => a.isPriority()).forEach(a => { this.ammo = a.refill(this.ammo) })
    this.airCrafts.filter((a) => !a.isPriority()).forEach(a => { this.ammo = a.refill(this.ammo) })

  }

}

let carrier = new Carrier()
carrier.add(undefined)
