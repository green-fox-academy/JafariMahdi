// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

const fs = require('fs');

function calcute(file) {
  let read = fs.readFileSync(file, 'utf-8').split('\n')
  try {
    fs.readFileSync(file, 'utf-8')
  } catch (e) {
    throw new Error('file has some problem')
  }
  let matrix = read.map(element => element.split(' '));
  let uniqCode = [];
  let getSet = [];
  for (let item of matrix) {
    uniqCode.push(item[8])
    getSet.push(item[11])
  }

  let result = {};
  for (let element of getSet) {
    if (result[element] === undefined) {
      result[element] = 1
    }
    else {
      result[element]++
    }
  }
  let result2: any[] = Object.entries(result);
  let ratio: any = result2[0][1] / result2[1][1]

  return [uniqCode, result, ratio]
}
console.log(calcute('log.txt'));
