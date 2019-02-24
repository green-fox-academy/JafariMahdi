'use strict ';

// *Create a Counter class
//   -which has an integer property
//   -when creating it should have a default value 0 or we can specify it when creating
//   -we can add(number) to increase the counter's value by a whole number
//   -or we can add() without parameters just increasing the counter's value by one
//   -and we can get() the current value as string
//  -also we can reset() the value to the initial value

class Counter {

    mynum: number;

    constructor(num: number = 0) {
        this.mynum = num;
    }
    addnumber(add) {
        this.mynum += add;
    }
    addOne() {
        this.mynum++;
    }
    get() {
        return this.mynum.toString();
    }
    reset() {
        this.mynum = 0;
    }
}
let first= new Counter;
console.log(first);
first.addnumber(6);
console.log(first);
first.reset()
console.log(first.get());





