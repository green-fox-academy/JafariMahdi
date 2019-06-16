
// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000


let aside: number = 200;
let bside: number = 50;
let cside: number = 20;

let surfaceArea: number = 2 * (aside * bside + aside * cside + bside * cside);
let volume: number = aside * bside * cside;

console.log('surfaceArea ' + surfaceArea);
console.log('volume ' + volume);
