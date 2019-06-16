'use strict';

let lineCount: number = 4;
let star = '';

// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is


for (let high = 1; high <= lineCount; high++) {
  for (let width = 0; width < high; width++) {
    star += '*'
  }
  console.log(star);
  star = '';
}