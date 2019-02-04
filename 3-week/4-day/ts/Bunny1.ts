'use strict';

// We have a number of bunnies and each bunny has two big floppy ears.
// We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).

function bunnies(n) {
     if (n < 1) {
          return 0  // <=  this number must be * 0 * for this function for working well
     } else {
          return 3 + bunnies(n-1)
     }    //         ^^^^^^^^^^^^^^ <=      always use this part         
}
console.log(bunnies(10));


// spacial function, working like the loop and you have to keep this rule always