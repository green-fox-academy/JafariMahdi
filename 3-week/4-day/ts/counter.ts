            'use strict ';

// Write a recursive function that takes one parameter: n and counts down from n.

 function recursive(x){
     if(x <= 1){
         return 1
     }else {
         return x * recursive(x - 1);
     }
 }
console.log('this is ',recursive(3));


