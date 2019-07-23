'use strict';

let star: string = '';
let space: string = '';


for (let i = 0; i < 4; i++) {
    for (let b = 0; b < 4 - i; b++) {
        space += ' ';
    }
    if (i == 0) {
        star += '*';
    } else {
        star += '**';
    }
    console.log(space + star);
    space = '';
}

star = '';           // always code runing from the top. here we make star again 0 for the next part of dimond
space = '';

for (let a = 1; a <= 3; a++) {

    for (let y = 6; y > (a * 2) - 1; y--) {
        star += '*';
    }
    space += ' ';

    console.log(space, star);
    star = '';
}










