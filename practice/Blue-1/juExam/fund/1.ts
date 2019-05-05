'use strict';

let arr1 = [0, 1, 5, 4]
let n1 = 3;
// should print [0, 1, 25, 4]

let arr2 = [0, 3, 5, 4, 3, 6]
let n2 = 2;
//  should print [0, 18, 5, 24, 3, 36]

function finder(num: number, list: number[]) {
  let max = list[0];
  let newList = [];
  let counter = num;
  for (let element of list) { if (element > max) { max = element } }

  for (let i = 0; i < list.length; i++) {
    if (i + 1 === counter) {
      list[i] = list[i] * max
      newList.push(list[i])
      counter += num
    } else {
      newList.push(list[i])
    }
  }
  return newList
}
console.log(finder(n1, arr1));
console.log(finder(n2, arr2));



