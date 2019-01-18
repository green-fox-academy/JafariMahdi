'use strict';

let lineCount: number = 4;

// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is

let a:string= '*';

for (let i = 0; i < 4; i++){
    console.log(a);
    a +='*';
} 