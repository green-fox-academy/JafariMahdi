'use strict';

// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"

const numbers: number[] = [1, 2, 3, 4, 5, 6, 8];

function containsSeven(input) {
  return input.indexOf(7) > -1 ? 'Hooooray' : 'Nooooooo' ;
  
  // indexof ra mitavan faghat baray yek element estefadeh kard bishtar  az yek shart nemishavad

}

console.log(containsSeven(numbers));
// The output should be: "Noooooo"
// Do this again with a different solution using different list functions!