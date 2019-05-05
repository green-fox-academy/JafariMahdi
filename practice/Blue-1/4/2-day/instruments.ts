
abstract class Instrument {
  name: string;

  abstract play();
}

abstract class StringedInstrument extends Instrument {
  numberOfString: number;

  abstract sound();
}

class ElectricGuitar extends StringedInstrument {
  stringSound = 'Twangg';
  numberOfString;
  name = 'Electric Guitare';
  constructor(Sound: number = 6) {
    super()
    this.numberOfString = Sound
  }

  play() {
    return this.sound()
  }
  sound() {
    return `${this.name}, a ${this.numberOfString}-stringed instrument that goes ${this.stringSound}`
  }
}


class BassGuitar extends StringedInstrument {
  stringSound = 'Duum-duum-duum'
  numberOfString;
  name = 'Bass Gitar';

  constructor(numberOfSound: number = 4) {
    super()
    this.numberOfString = numberOfSound;
  }

  play() {
    return this.sound()
  }

  sound() {
    return `${this.name}, a ${this.numberOfString}-stringed instrument that goes ${this.stringSound}`
  }
}


class Violin extends StringedInstrument {
  stringSound = 'Screech'
  numberOfString;
  name = 'Vielon';

  constructor(numberOfSound: number = 4) {
    super()
    this.numberOfString = numberOfSound
  }

  play() {
    return this.sound()
  }

  sound() {
    return  `${this.name}, a ${this.numberOfString}-stringed instrument that goes ${this.stringSound}`
  }
}


console.log('Test 1, create Electric Guitar, Bass Guitar and Violin with default strings.');
let guitar = new ElectricGuitar();
let bassGuitar = new BassGuitar();
let violin = new Violin();

console.log('test 1');
console.log(guitar.play())
console.log(bassGuitar.play())
console.log(violin.play());

console.log('Test 2, create Electric Guitar, Bass Guitar with 7 and 5 strings .');

let gitar2 = new ElectricGuitar(7);
let bassGuitar2 = new BassGuitar(5);

console.log('test 2');
console.log(gitar2.play());
console.log(bassGuitar2.play());
