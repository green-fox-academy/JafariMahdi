'use strict';

// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %

let percent = '%';
let space = '';

for (let high = 1; high <= 8; high++) {
  if (high % 2 !== 0) {
    for (let width = 1; width < 4; width++) {
      percent += '%';
    }
    console.log(percent);
    percent = '%'
  }
  else {
    for (let width = 1; width < 4; width++) {
      percent += '%'
    }
    console.log(space, percent);
    percent = '%';
  }
}

