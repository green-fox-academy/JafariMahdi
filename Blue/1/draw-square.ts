'use strict';


// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is


let lineCount1: number = 6;
var percent = "%";
let space1 = '';

for (let high = 1; high <= lineCount1; high++) {

  if (high === 1 || high === 6) {
    for (let width = 1; width <= lineCount1; width++) {
      percent += '%';
    }
    console.log(percent);
    percent = '%';
  }
  else {
    for (let width = 1; width < lineCount1 - 2; width++) {
      space1 += ' ';
    }
    console.log(percent, space1, percent);
    space1 = '';
  }
}

