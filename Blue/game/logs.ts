'use strict';

// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

const fs = require('fs');

function reader(file) {
  let read = fs.readFileSync(file, 'utf-8').split('\n')
  try {
    fs.readFileSync(file, 'utf-8')
  } catch (e) {
    throw new Error("can't read the file")
  }
  let litralArray = read.map(element => element.split(' '))
  let uniqList = litralArray.map(element => element[8]);

  let result = {};
  for (let value of litralArray) {
    if (result[value[11]] === undefined) {
      result[value[11]] = 1
    } else {
      result[value[11]]++
    }
  }
  let out: any[] = Object.entries(result)
  let ratio = out[1][1] / out[0][1];
  return { uniqList, result, ratio }
}
console.log(reader('log.txt'))