"use strict";


//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once

function unique(arr) {
  let newArray: number[] = [];
  arr.forEach(element => {
    if (!newArray.includes(element)) {
      newArray.push(element);
    }
  });
  return newArray;
}

console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]));
//  should print: `[1, 11, 34, 52, 61]