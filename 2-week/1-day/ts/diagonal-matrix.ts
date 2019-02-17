'use strict';

// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

let size = 5;
let matrix: any[][] = [];

for (let hight = 0; hight < size; hight++) {
  matrix[hight] = [];
  for (let width = 0; width < size; width++) {
    if (hight + width === size - 1) {
      matrix[hight][width] = 1;
    } else {
      matrix[hight][width] = 0;
    }
  }
}
console.log(matrix);


