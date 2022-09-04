'use strict';
class Station {

  gasAmount;

  refill(car) {
    this.gasAmount--;
    //capacity.Car ++
  }
}

class Car {
  gasAmount;
    capacity;

  constructor(gasAmount: number = 0, capacity: number = 100) {
    this.gasAmount = gasAmount;
    this.capacity = capacity;
  }
}