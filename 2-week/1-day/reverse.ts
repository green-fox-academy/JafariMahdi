'use strict ';

let numlist: number[] = [3, 4, 5, 6, 7];

let newlist = numlist.reverse();
console.log(newlist);

// secound solution

let new2list: number[] = [];

for (let i = 0; i < numlist.length; i++) {
  new2list[i] = numlist[numlist.length - 1 - i];
}
console.log(new2list);


