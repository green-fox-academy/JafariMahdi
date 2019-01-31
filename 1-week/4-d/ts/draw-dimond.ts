'use strict';


let star: string = '*';
let space: string = '';


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


for (let i = 0; i < 4; i++) {
    for (let b = 0; b < 4 - i; b++) {
        space += ' ';
    }    
        if (i == 0) {
            star += '';
        } else {
            star += '**';
        }

    console.log(space + star);
    space = '';
}







