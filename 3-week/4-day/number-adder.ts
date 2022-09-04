'use strict ';

function recursive(x) {

    if (x <= 1) {
        return 1;
    } else {
        console.log(x);
        return x + recursive(x - 1);
    }
}

console.log(recursive(10));
