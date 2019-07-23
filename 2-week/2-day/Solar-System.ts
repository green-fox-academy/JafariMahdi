'use strict';

let planetList: string[] = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Uranus', 'Neptune'];
// Expected output: "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn",  "Uranus", "Neptune"

function addToSolarSystem(where: number, name: string) {

  planetList.splice(where, 0, name);
  return planetList;
}

//in parntese is the first number is the index 2- if thats is  '0 ' you wanna add some element if thats is number you wanna delet 
// them example 1 means delet one element or 2 mean delete 2 element and so on 

console.log(addToSolarSystem(5, 'Saturn'));
console.log(addToSolarSystem(2, 'zohall'));
