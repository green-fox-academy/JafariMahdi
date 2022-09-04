'use strict';

function bunnies(n) {
     if (n < 1) {
          return 0  // <=  this number must be * 0 * for this function for working well
     } else {
          return 3 + bunnies(n-1)
     }    //         ^^^^^^^^^^^^^^ <=      always use this part         
}
console.log(bunnies(10));
