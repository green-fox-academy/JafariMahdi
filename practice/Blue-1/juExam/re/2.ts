' use strict';

function finder(path) {
  let fs = require('fs')
  let read = fs.readFileSync(path, 'utf-8').split('\n')

  try {
    fs.readFileSync(path, 'utf-8')
  } catch (e) {
    throw new Error("can't read the file")
  }

  let matrix = read.map(element => element.split(','))

  let chepCode: string[] = [];

  matrix.forEach(element => {
    if (element.includes('A66 - 04 FÕBEJÁRAT (F-1) Door #1')) {
      chepCode.push(element[12])
    }
  });
  let result = {}

  for (let element of chepCode) {
    if (result[element] === undefined) {
      result[element] = 1
    } else {
      result[element]++
    }
  }
  return result
}

console.log(finder('tx.csv'));
