'use strict';

// Given a non-negative int n, return the sum of its digits recursively (no loops). 
// Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while 
// divide (/) by 10 removes the rightmost digit (126 / 10 is 12).

function sum(x) {
    if (x < 10) {
      return x % 10;
    } else {
  
      return (x % 10) + sum(Math.floor(x / 10))
  
    }
  
  }
  
  
  console.log(sum(45));