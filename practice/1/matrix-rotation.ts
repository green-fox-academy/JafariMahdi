'use strict';

// Create a function named `rotateMatrix` that takes an n×n integer matrix (array of arrays) as parameter
// and returns a matrix which elements are rotated 90 degrees clockwise.

const matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

function rotateMatrix(pMatrix: number[][]): number[][] {
  let result: number[][] = [];

  for (let i: number = 0; i < pMatrix.length; i++) {
    for (let j: number = 0; j < pMatrix.length; j++) {

      if (typeof result[j] === 'undefined') {
        result[j] = [];
      }

      result[j][pMatrix.length - 1 - i] = pMatrix[i][j];
    }
  }

  return result;
}

/*
0,0 => 0,2
0,1 => 1,2
0,2 => 2,2
1,0 => 0,1
1,1 => 1,1
1,2 => 2,1
2,0 => 0,0
2,1 => 1,0
2,2 => 2,0
*/

console.log(rotateMatrix(matrix));
// should print (in one line):
// [ [ 7, 4, 1 ],
//   [ 8, 5, 2 ],
//   [ 9, 6, 3 ] ]
