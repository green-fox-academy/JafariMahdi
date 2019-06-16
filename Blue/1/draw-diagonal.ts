'use strict';

let lineCount: number = 6;

// Write a program that draws a
// square like this:
//
// %%%%%%
// %%   %
// % %  %
// %  % %
// %   %%
// %%%%%%
//
// The square should have as many lines as lineCount is

let percent = '%';
let space = '';
let extraPercent = '%';

for (let high = 1; high <= lineCount; high++) {

  if (high === 1 || high === 6) {
    for (let width = 1; width < lineCount; width++) {
      percent += '%';
    }
    console.log(percent);
    percent = '%';
  }




  else {
    for (let width = 1; width < 3; width++) {

      space += "";
      }
      console.log(percent+ extraPercent+ percent);
      space = '';
    }
        

}






/*
let space = '';
let star1 = '*';
 for( let i =0;i < 5;i++){
   console.log(space,star1);
   space +=' ';
  }
    */

