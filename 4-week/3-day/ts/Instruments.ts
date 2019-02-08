'use strict ';

abstract class Instrument {

    nameOfInstrument: string;

    play() { };
}
abstract class StringedInstrument extends Instrument {
    numberOfStrings: string;

    abstract sound();
    play() {
        return this.sound();
    }
}
class ElectricGuitar extends StringedInstrument {
    Egitar: string = 'Twang';

    constructor(input: number = 6) {
        super();
    };
    sound(): string {
        return this.Egitar;
    }
}


class BassGuitar extends StringedInstrument {
    Bgitar: string = 'Duum-duum-duum';

    constructor(Base: number = 4) {
        super();

    }
    sound(): string {
        return this.Bgitar;
    }
}
class Violin extends StringedInstrument {
    violin: string = 'Screech';

    constructor(violin: number = 4) {
        super();
    }
    sound(): string {
      return this.violin;
    }
}
export { Instrument, Violin, BassGuitar, ElectricGuitar, StringedInstrument };

