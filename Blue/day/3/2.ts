'use strict';

const fs = require('fs');

function reading(file) {
  let read = fs.readFileSync(file, 'utf-8').split('\n');
  try {
    fs.readFileSync(file, 'utf-8')
  } catch (e) {
    console.log('there is some problem for reading the file');
  }
  let matrix = read.map(element => element.split(','))
  let spacialCode = [];

  for (let row of matrix) {
    if (row[5] === 'A66 - 04 FÕBEJÁRAT (F-1) Door #1') {
      spacialCode.push(row[row.length - 1])
    }
  }

  let result = {};
  for (let code of spacialCode) {
    if (result[code] === undefined) {
      result[code] = 1
    } else {
      result[code]++
    }
  }
  let makingSort: any[] = Object.entries(result);
  
  let sorting = makingSort.sort((a, b) => b[1] - a[1]);


  console.log(sorting);
}
reading('t2.csv')
