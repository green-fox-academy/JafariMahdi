'use strict';

let file: number[][] = [
  [1, 0, 1],
  [0, 2, 2],
  [1, 2, 5]
]
let file2: number[][] = [
  [7, 7, 7],
  [6, 5, 7],
  [1, 2, 1]
]

let result = true;
function isSymetric(file) {
  for (let i = 0; i < file.length; i++) {
    for (let j = 0; j < file.length; j++) {
      if (file[j][i] !== file[i][j]) {
        result = false
      }
    }
  }
  return result
}

console.log(isSymetric(file))
console.log(isSymetric(file2))
