'use strict';

const fs = require('fs');
function readign(): any {
  try {
    fs.readFileSync('2t.txt', 'utf-8')
  } catch (e) {
    throw new Error('there is nothing')
  }
}

function finder(read) {
  read = fs.readFileSync('2t.txt', 'utf-8').split('');
  let mostComent = {};
  for (let item of read) {
    if (mostComent[item] === undefined) {
      mostComent[item] = 1
    } else {
      mostComent[item]++
    }
  }
  let findBigNumber: any = Object.entries(mostComent);
  let sort = findBigNumber.sort((a, b) => b[1] - a[1]);
  findBigNumber = sort[0];

  return findBigNumber
}
console.log(finder('2t.txt'));

