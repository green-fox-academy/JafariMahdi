let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

for (let i = 0; i < arr.length; i++) {
  if (arr[i - 1] % 2 === 0) {
    arr.splice(i, 1)
  }
}
//console.log(arr);

//    ---------------------------- delet kardan itemha dar array 

let list = [
  [1, 2, 3, 5],
  [4, 5, 6, 7],
  [8, 9, 0, 1]];

// rahe aval nested loop 

for (let item of list) {
  for (let value of item) {
    if (value === 0) {
      console.log(value);
    }
  } // dashtan else inja chandin bar print mokonad va jaleb nist
}

// rahe dovom ba yek loop
let item;
for (let value of list) {
  if (value[2] === 0) {
    item = value[2]
  }
}
if (item === undefined) {
  console.log('there is nothing')
} else {
  console.log(item);
}

//    --------------------------------------------------------

let obj = [
  { name: 'mahdi', family: 'jafari' },
  { name: 'jhon', family: 'smith' },
  { name: 'mary', family: 'thamson' }];

let person;
for (let item of obj) {
  if (item.name === 'mary') { person = item.name }
}
// check for IF and ELSE
if (person === undefined) {
  console.log('there is no person');
} else {
  console.log(person);
}

 // comper kardadn ba reduce
let arr1 = [1, 3, 4, 7, 9, 10, 12, 15]
let reduce1 = arr1.reduce((a, b) => b > a ? b : a)
console.log(reduce1);  //out => 15
