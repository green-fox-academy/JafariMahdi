 'use strict';
// *Create a Station and a Car classes
//  -Station
//    .gasAmount
//    .refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount
// *Car
//   -gasAmount
//   -capacity
//   -create constructor for Car where:
//      .initialize gasAmount -> 0
//      .initialize capacity -> 100

class Station {

  gasAmount;

  refill(car){
    this.gasAmount --;
    //capacity.Car ++
  }
}

class Car{
  gasAmount:
  capacity;

  constructor(gasAmount:number=0, capacity:number= 100){
    this.gasAmount= gasAmount;
    this.capacity = capacity;
  }
}