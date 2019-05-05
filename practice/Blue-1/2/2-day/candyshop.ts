'use strict';

let shopItems: any[] = ['Cupcake', 2, 'Brownie', false];

// Accidentally we added "2" and "false" to the array.
// Your task is to change from "2" to "Croissant" and change from "false" to "Ice cream"
// No, don't just remove the items :)
// Create a function called sweets() which takes the list as a parameter.
// Expected output: "Cupcake", "Croissant", "Brownie", "Ice cream"

function sweets(input) {
  let newnum = input.indexOf(2)
  let newfalse = input.indexOf(false)   // just for the check diffrent methods

  input.splice(newnum, 1, 'Croissant')
  input.splice(newfalse, 1, 'Ice cream')

  return input
}

console.log(sweets(shopItems));
