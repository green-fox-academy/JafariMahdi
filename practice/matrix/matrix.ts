'use strict';


let matrix = [];
let size = 5;

for (let row = 0; row < size; row++) {
    matrix[row] = [];
    for (let c = 0; c < size; c++) {
        if (c + row === size - 1) {
            matrix[row][c] = 1;
        } else {
            matrix[row][c] = 0;
        }
    }
}

//console.log(matrix);

let Matrix = [];
let Size: number = 5;

for (let value = 0; value < Size; value++) {
    Matrix[value] = [];
    for (let element = 0; element < Size ; element++) {
        if (element + value === Size - 1) {
            Matrix[value][element] = 1;
        }
        else {
            Matrix[value][element] = 0;
        }
    }
}

console.log(Matrix);
