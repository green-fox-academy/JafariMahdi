'use strict';
function finder(file) {
  const fs = require('fs');
  try {
    fs.readFileSync(file, 'utf-8')
  } catch (e) {
    throw new Error('there is nothing');
  }
  let readFile = fs.readFileSync(file, 'utf-8');

  let read = readFile.split('')
  let amount = {}
  for (let item of read) {
    if (amount[item] === undefined) {
      amount[item] = 1
    } else {
      amount[item]++
    }
  }
  let list = Object.entries(amount);
  //console.log(list);

  let sortIt = list.sort((a: any, b: any) =>
    b[1] - a[1]
  )
  let result = sortIt[0]
  return result
}
console.log(finder('2t.txt'));