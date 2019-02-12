"use strict";
// Check if array contains all of the following elements: 4,8,12,16
// Create a function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"

            // first 
/*let listOfNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 16];

function checkNums(array: number[]) {
  let nums: number[] = [4, 6, 1, 16];
  return nums.every(e => array.includes(e));
}

console.log(checkNums(listOfNumbers));*/

        // secound

let listOfNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 16];

function checkNums(list: number[]){
    if (list.indexOf(4)!==-1 && list.indexOf(8)!==-1 && list.indexOf(12)!==-1 && list.indexOf(16)!==-1){
        return true;
    }
    else {return false;}
}

console.log(checkNums(listOfNumbers));