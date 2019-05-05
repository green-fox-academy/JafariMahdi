'use strict';

function adverge(path) {
  const fs = require('fs')
  let read = fs.readFileSync(path, 'utf-8').split('\n')
  try {
    fs.readFileSync(path, 'utf-8')
  } catch (e) {
    console.log("couldn't read the file");
  }
  let matrix = read.map(element => element.split(' '))
  let head = ['matriealView', 'pressSkill', 'helpFulness', 'explantion']

  // object file
  let result = {};
  
  // loop for the head
  for (let i = 0; i < head.length; i++) {
    let num = 0;
    // inner loop
    for (let item of matrix) {
      num += Number(item[i])
    }
    result[head[i]] = num / matrix.length;
  }
  return result
}
console.log(adverge('2.txt'));

