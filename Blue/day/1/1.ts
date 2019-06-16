'use strict';

function isSymmetric(matrix: number[][]) {

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[i][j] !== matrix[j][i]) {
        return false
      }
      else { return true }
    }
  }
}
//
