'use strict ';

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





