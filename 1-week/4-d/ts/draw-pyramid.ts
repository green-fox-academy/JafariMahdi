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
let n: number= 4;
let s: string = '';
let d: string ='*';

for(let i =0; i < n; i++ ){
    for(let b = 0; b < 4 -i ; b++){
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




