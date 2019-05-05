'use strict';

//  Create a function that takes a number and an array of numbers as a parameter
//  Returns the indices of the numbers in the array of which the first number is a part of
//  Or returns an empty list if the number is not part of any of the numbers in the array

function subint(num, list) {
  let newlist = [];
  let index = [];

  for (let i = 0; i < list.length; i++) {
    newlist.push(list[i].toString());
  }

  for (let item = 0; item < newlist.length; item++) {
    if (newlist[item].includes(num.toString())) {
      index.push(item)
    }
  }
  return index
}
// Example
console.log(subint(1, [1, 11, 34, 52, 61]));
// should print: `[0, 1, 4]`
console.log(subint(9, [1, 11, 34, 52, 61]));
// should print: '[]'

// key words

// split() baraye file ke string hast kar mikonad bad tabdil be array mishavad 
// baraye check kardane INCLUDES() dar number hamise bayad tabdil be string shavad ta betvanid har char an ra compera konid chon type number integer hast
// dar string mishavad be rahati har charecter ra baressi kard  vali dar number gheyre momken hast pass aval tabdil be string shavad bad compare konid

