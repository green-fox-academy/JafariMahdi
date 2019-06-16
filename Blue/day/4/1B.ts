
let arr1 = [1, 2, 3, 4, 5, 5, 6, 2];
let arr2 = [8, 5, 4, 6, 8];


function match(arr1, arr2) {
  let arr3 = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] + arr2[j] === 10) {
        let sendit = `${arr1[i]} + ${arr2[j]}`
        let reverse = `${arr2[j]} + ${arr1[i]}`
        if (!arr3.includes(sendit) && !arr3.includes(reverse)) {
          arr3.push(sendit)
        }
      }
    }
  }
  let length = arr3.length
  return {arr3,length}
}

console.log(match(arr1, arr2));