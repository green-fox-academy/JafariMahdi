
'use strict';

// Write a program that calculates the sum and the average from 1 to a given number.
// Example input: 5
// Example output: Sum: 15, Average: 3

function calcutate(num) {
  let sum = 0;
  let average = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  average = sum / num
  return 'sum: ' + sum + ' Average: ' + average
}
console.log(calcutate(8));


