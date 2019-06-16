
'use strict';

let lineCount1: number = 7;
let star = '*';
let space = '';

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

for (let high = 1; high <= 4; high++) {

  for (let width = 0; width <= 4 - high; width++) {
    space += ' ';
  }
  console.log(space, star);
  space = '';
  star += '**';
}

star='*';
space = '  ';

for (let high2 = 1; high2 <= 3; high2++) {
  for (let width1 = 0; width1 <= 2 - high2; width1++) {
    star += '**';
  }
  console.log(space, star);
  star = '*';
  space += ' ';
}


