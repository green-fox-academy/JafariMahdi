'use strict';
// Saturn is missing from the planetList
// Insert it into the correct position
// Create a function called putSaturn() which has list parameter and returns the correct list.
// bonus for using some built in methods

let planetList: string[] = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Uranus', 'Neptune'];
// Expected output: "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn",  "Uranus", "Neptune"

planetList.splice( 5, 0, 'Saturn'); // splice is usefull for the add or remove element by index in list  and it's really important how to write it
               //  *  *    *
                   
//in parntese is the first number is the index,, 2- second number: if thats is  '0 ' you wanna add some element if thats is number you wanna delet 
 // them example 1 means delet one element or 2 mean delete 2 element and so on 

console.log(planetList);


// console.log(putSaturn(planetList));

// export = putSaturn;