'use strict';

class Human {
  name: string;
  age: number;
  iq: number;

  constructor(name: string = 'unknown', age: number = 0, iq: number = 0) {
    this.name = name;
    this.age = age;
    this.iq = iq;
  }

  public isSmart(): boolean {
    return this.iq > 100;
  }

  public isNameless(): boolean {
    return this.name === 'unkown' || this.name === '';
  }

  public beSmarter(): void {
    this.iq += 20;
  }
}

let human = new Human();
let human2 = new Human('Laci', 18, 110);

human.name = 'Hector';
human.age = 1;

if (human.isSmart()) {
  console.log(`${human.name} is smart, with iq: ${human.iq}`);
}