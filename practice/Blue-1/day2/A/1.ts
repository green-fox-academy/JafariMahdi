'use stric'

let mylist: number[][] = [
  [1, 0, 1],
  [0, 2, 2],
  [1, 2, 5]
]

function isSymetric(matrix: number[][]) {

  for (let i: number = 0; i < matrix.length; i++) {
    for (let j: number = 0; j < matrix.length; j++) {
      if (matrix[j][i] !== matrix[i][j]) {
        return false;
      }
    }
  }
  return true;
}

console.log(isSymetric(mylist));


