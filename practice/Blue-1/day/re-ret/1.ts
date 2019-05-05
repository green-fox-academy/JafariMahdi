'use strict';

let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [8, 5, 4, 6];

let arr1b = [0, 7, 5, 4, 4, 6];
let arr2b = [8, 10, 4, 3, 5, 5, 6];

function compare(arr1, arr2) {
  let arr3 = '';

  for (let element of arr1) {
    for (let item of arr2) {
      if (element + item === 10) {
        if (arr3.indexOf(item) ===-1 && arr3.indexOf(element) === -1) {
          arr3 += item + '+' + element + ' ';
        }
      }
    }
  }
  return arr3
}
console.log(compare(arr1b, arr2b));

