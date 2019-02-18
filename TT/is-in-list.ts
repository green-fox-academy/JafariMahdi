"use strict";
// Check if array contains all of the following elements: 4,8,12,16
// Create a function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"

let listOfNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 16];

// FIRST
function checkNums(array: number[]) {
  let nums: number[] = [4, 6, 1, 16];   // =>  put 1 just for the test it
  return nums.every(value => array.includes(value));
}
console.log(checkNums(listOfNumbers));


// SECOUND
function checkNums1(list: number[]) {
  if (list.includes(4) && list.includes(8) && list.includes(12) && list.includes(16)) {
    return true;
  } else {
    return false;
  }
}
console.log(checkNums1(listOfNumbers)); 
