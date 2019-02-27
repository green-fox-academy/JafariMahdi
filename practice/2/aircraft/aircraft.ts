'use strict';

class Aircraft {
  type: string;
  maxAmmo: number;
  baseDamege: number;
  storageAmmo: number;
  allDamege: number;

  constructor(type: string) {
    this.type = type;
    this.allDamege;
    this.storageAmmo = 0;
    if (type === 'F16') {
      this.maxAmmo = 8;
      this.baseDamege = 30;
    }
    else if (type === 'F35') {
      this.maxAmmo = 12;
      this.baseDamege = 50;
    }
    //--------------------------------------------------------

  }
  fight() {
    this.baseDamege * this.maxAmmo;
    this.storageAmmo = 0;
  }

  refill(input: number) {
    if (input > this.maxAmmo) {
      this.storageAmmo = this.maxAmmo;
      this.allDamege = this.storageAmmo - this.baseDamege;
      return input;
    }
    else {
      this.storageAmmo = input
      this.allDamege = this.baseDamege * this.storageAmmo;
      input = 0;
      return input;
    }
  }
  gettype(){
    return this.type.toString();
  }

  getstatus(){
    return `Type ${this.type}, Ammo: ${this.maxAmmo}, Base Demage: ${this.baseDamege}, All Demage: ${this.allDamege} `
  }
  ispriority(){
    return this.type ==='F35'? true : false;
  }
}
// ------------------------------------------------------------

class Carrier{

  aircrafts : Aircraft[];
  stroeAmmo: number;
  initalAmmo: number;
  helthPoint: number;

  constructor( initalAmmo,helthPoint){

    this.initalAmmo = initalAmmo;
    this.helthPoint = helthPoint;
  }
//-------------------------------------------------------------

add(input : Aircraft){
this.aircrafts.push(input);
}

fill(){
  
}
}
