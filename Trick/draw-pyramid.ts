'use strict';

let lineCount: number = 4;

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

let s: string = '';
let d: string ='*';

for(let i =0; i < 4; i++ ){             // for width
    for(let b = 0; b < 4 -i ; b++){             // for height
        s +=' ';
    }
    if (i == 0){
        d += ''
    }else{
        d += '**'
    }
    console.log(s,d);
    s='';
    
}




