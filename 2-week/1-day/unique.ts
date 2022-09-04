'use strict';

function unique(arr: any[]): any {
  let newlist: any[] = [];
  arr.forEach(value => {
    if (!newlist.includes(value)) {
      newlist.push(value)
    }
  })
  return newlist;
}
//  Example
console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]))
//  should print: `[1, 11, 34, 52, 61]`