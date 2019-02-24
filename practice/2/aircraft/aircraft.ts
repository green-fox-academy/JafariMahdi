

class Plane {
  type;
  maxAmmo;
  baseDemmo;
  ammoStorege;

  constructor(type: string, max: number, base: number, ammo: number = 0) {
    this.type = type;
    this.maxAmmo = max;
    this.baseDemmo = base;
    this.ammoStorege = ammo;
  }

  fight() {
    return this.ammoStorege * this.baseDemmo;
  }

  refril(input) {
    if (input <= this.maxAmmo) {
      this.maxAmmo = input;
      return `your ammo is fill it and now is ${this.maxAmmo}`
    } else {
      this.ammoStorege = input - this.maxAmmo;
      return `you fill the Ammo and your ammoStoreg is now ${this.ammoStorege}`
    }
  }
  gettype() {
    return this.type;
  }
  getstatus() {
    return `Type:${this.type}, Ammo: ${this.maxAmmo}, Base damage:${this.baseDemmo}, All damage:${this.ammoStorege}`
  }
  isPriority() {
    let result = this.type === 'F35' ? true : false;
    return result;
  }
}




class F16 extends Plane {

  constructor(type: string = 'F16', max: number = 8, base: number = 30) {
    super(type, max, base);

  }
}

class F35 extends Plane {

  constructor(type: string = 'F35', max: number = 12, base: number = 50) {
    super(type, max, base);

  }

}

export { Plane,F16,F35}



let agle = new F16;
console.log(agle.gettype());
console.log(agle.getstatus());
console.log(agle.fight());
console.log(agle.refril(20));
console.log(agle.isPriority());



