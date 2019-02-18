
'use strict';

// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"

const numbers: number[] = [1, 2, 3, 4, 5, 6, 8];

function containsSeven(list: any[]): any {
  if (list.includes(7)) {
    return 'Hooray';
  } else {
    return 'Nooooo';
  }
}

console.log(containsSeven(numbers));
// The output should be: "Noooooo"
// Do this again with a different solution using different list functions!

let fun: any[] = [1, 4, 'yes', 'no', 'later', 100];
function bahal(list: any[]) {
  if (list.includes(100)) {
    return 'yes';
  } else {
    return 'maybe';
  }
}
console.log(bahal(fun));
