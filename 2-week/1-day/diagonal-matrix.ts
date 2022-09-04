'use strict';

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


