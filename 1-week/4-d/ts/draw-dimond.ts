'use strict';

let lineCount: number = 7;
let star: string = '*';
let space : string= '';
let ad: number = 4;

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

for (let i= 0 ; i < 4; i++){
    for( let b=0; b < 4 - i; b++){
        
    } space += '$';
    console.log(space+star);
    star += '**';
}  
//console.log(space+star);
    // star += '**';




