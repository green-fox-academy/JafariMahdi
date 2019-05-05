'use strict';

let lineCount: number = 4;
let star = '*';
let space = '';

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

for (let high = 1; high <= lineCount; high++) {
  for (let width = 0; width < lineCount - high; width++) {
    space += ' ';
  }
  console.log(space, star);
  space = '';
  star += '**';

}