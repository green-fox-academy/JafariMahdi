'use strict';

//  Symmetry Checker

function checkIfItIsSymmteric(matrixToCheck: number[][]): boolean {
  for (let i = 0; i < matrixToCheck.length; i++) {
    for (let j = 0; j < matrixToCheck.length; j++) {
      console.log(
        'I am comparing ' + matrixToCheck[i][j] + ' to ' + matrixToCheck[j][i]
      );
      if (matrixToCheck[j][i] !== matrixToCheck[i][j]) {
        return false;
      }
    }
  }
  return true;
}

let mySymmetricMatrix: number[][] = [[1, 2, 1], [2, 1, 2], [1, 2, 1]];


/*Write a method which takes two matrices as parameters and returns a new matrix.
The method should compare each element in the input matrices and fill the returned matrix with the greater values.
You only have to deal with square matrices. A square matrix is a matrix with the same number of rows and columns.
Write 2 different test cases for the method.
Example 1
Input 1
[
[2, 1],
[0, 1]
]
Input 2
[
[0, 3],
[-1, 1]
]
Output

[
[2, 3],
[0, 1]
]*/



function compareMatrixValues(matrixOne: number[][], matrixTwo: number[][]): number[][] {
  let mySuperMatrix: number[][] = matrixTwo;
  for (let i = 0; i < matrixOne.length; i++) {
    for (let j = 0; j < matrixOne.length; j++) {
      if (matrixOne[i][j] > matrixTwo[i][j]) {
        mySuperMatrix[i][j] = matrixOne[i][j];
      } else {
        mySuperMatrix[i][j] = matrixTwo[i][j];
      }
    }
  }
  return mySuperMatrix;
}

let myDummyOne: number[][] = [[2, 1], [0, 1]];
let myDummyTwo: number[][] = [[0, -4], [-1, 1]];

console.log(compareMatrixValues(myDummyOne, myDummyTwo));
