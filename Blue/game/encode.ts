'use strict';

const fs = require('fs');

function deCode(file) {  // wrong answer
  let read;
  try {
    read = fs.readFileSync(file, 'utf-8').split('\n')
  } catch (e) {
    throw new Error("can't read the file")
  }
  let makeList = read.map(element => element.split('  ').reverse().join(' '))
  return [makeList.reverse(), read]



}
console.log(deCode('encode.txt'));
