'use strict';
let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [8, 5, 4, 6];
//  3   // 8+2,5+5,4+6

let arrA = [0, 7, 5, 4, 4, 6];
let arrB = [8, 10, 4, 3, 5, 5, 6];
// 4      //0+10,7+3,5+5,4+6

function matcher(list1, list2) {
  let newList = [];

  for (let i = 0; i < list1.length; i++) {
    for (let j = 0; j < list2.length; j++) {
      if (list1[i] + list2[j] === 10) {
        let readyToSend = `${list1[i]} + ${list2[j]}`;
        let reverseIt = `${list2[j]} + ${list1[i]}`;
        if (!newList.includes(readyToSend) && !newList.includes(reverseIt)) {
          newList.push(readyToSend)
        }
      }
    }
  }
  let length = newList.length
  
  return { length, newList }
}

console.log(matcher(arr1, arr2))
console.log(matcher(arrA, arrB))

//  function
