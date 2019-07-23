'use strict';

let chess: string = '';


for (let i = 0; i < 8; i++) {
    for (let b = 0; b < 4; b++) {
        if (i % 2 === 0) {
            chess = '%%%%';

        } if (i % 2 !== 0) {
            chess = ' %%%%';
        }
    }
    console.log(chess);
    chess = '';
}