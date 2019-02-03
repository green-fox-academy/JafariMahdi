'use strict ';


// Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

function recursive(x) {

        if (x <= 1) {
            return 1;
        } else {
            console.log(x);
            return x + recursive(x -1);
        }
    }

console.log(recursive(10));
