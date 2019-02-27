let list = [-2, -4, -6, -7, -9, -1];

let bigNum = list[0];
list.forEach(element => {
  if (element > bigNum) { bigNum = element }
})
console.log(bigNum);

// ----------------------------------- make list to object
let num = [4, 1, 7, 9, 3, 6, 5, 8, 5, 4, 3, 2, 7, 5, 3];
let str =['s','g','r','w','w','r','n','w','q ','s','f ', 'v ','s']  // space mitone avaz kone type file ro

function find(list1) {
  let counter = {};
  for (let i = 0; i < list1.length; i++) {
    if (counter[list1[i]]) {
      counter[list1[i]] += 1;
    } else {
      counter[list1[i]] = 1;
    }
  }
  return counter;

}
console.log(find(num));
console.log((find(str)));


// ----------------------------------------