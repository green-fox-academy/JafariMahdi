
import { Animal } from './Zoo'

interface Flyble {

  land(): void;
  fly(): void;
  tackOff(): void;
}

abstract class Vehicle {
  name: string;
  wiegth: number;
  speed: number;
}

class Helicopter extends Vehicle implements Flyble {
  name= 'Helicupter';
  speed = 500;
  wiegth= 1500;
  land() {
    return `Helicupter descand vertically to the grand `
   };
  fly() { 
    return `Helicupter fly with speed of ${this.speed} `
  };
  tackOff() {
    return `${this.name} don't need to speed up before taking off.` 
   };

}

class Bird extends Animal implements Flyble {

  land() {
    return 'Birds are land diffrent way accourding to thier body structure'
   };
  fly() { return 'can fly'};

  tackOff() {
    return 'Birds can easly fly with help of wind'
  };
}