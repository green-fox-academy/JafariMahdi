'use strict';
/*
Create a Counter class
which has an integer property
when creating it should have a default value 0 or we can specify it when creating
we can add(number) to increase the counter's value by a whole number
or we can add() without parameters just increasing the counter's value by one
and we can get() the current value as string
also we can reset() the value to the initial value */


class Counter {
  integer;
  constructor(num: number = 0) {
    this.integer = num;
  }
  add(number?) {
    if (number) { this.integer += number }
    else { this.integer++ };
  }
  get() {
    return this.integer
  }
  reset() {
    this.integer = 0;
  }
}

let myCounter = new Counter(20);

console.log(myCounter.add(3));

console.log(myCounter.get());

//console.log(myCounter);

//    alamete ? dar har ja dar parametr mitavand parametr ra akhteyari konad 
//    mitavanid az if() niz baraye shart estefadeh konid dar method.
//     



