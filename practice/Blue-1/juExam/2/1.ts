'use strict';

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]]

function check(matrix) {
  let result: number[][] = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (typeof result[j] === 'undefined') {
        result[j] = [];
      }
      result[j][matrix.length - 1 - i] = matrix[i][j];
    }
  }
  return result
}Í
console.log(check(matrix));

