'use strict ';
// -  Create a variable named `numList`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements in `numList`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numList


let numlist: number[] = [3, 4, 5, 6, 7];

let newlist = numlist.reverse();
console.log(newlist);

// secound solution

let new2list: number[] = [];

for (let i = 0; i < numlist.length; i++) {
  new2list[i] = numlist[numlist.length - 1 - i];
}
console.log(new2list);


