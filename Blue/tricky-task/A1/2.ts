'use strict';

const fs = require('fs');
function read(file) {
  let read = fs.readFileSync(file, 'utf-8').split('')
  try {
    fs.readFileSync(file, 'utf-8')
  } catch (e) {
    throw new Error("can't read the file")
  }

  let result = {}
  for (let element of read) {
    if (result[element] === undefined) {
      result[element] = 1
    } else {
      result[element]++
    }
  }
  let findMostCommon: any[] = Object.entries(result)
  let sort = findMostCommon.sort((a, b) => b[1] - a[1])
  let mostCommon = sort[0]
  
  return mostCommon
}
console.log(read('txt.txt'));
