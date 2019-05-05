'use strict';
let fs = require('fs')

function avreger(path) {
  let read = [];
  try {
    read = fs.readFileSync(path, 'utf-8').split('\n')
  } catch (e) {
    console.log("coudn't find th file")
    process.exit()
  }

  let matrix = read.map(element => element.split(' '))
  let head = ['matReview', 'pressSkill', 'helpFulness', 'explention'];

  let result = {}
  for (let i = 0; i < head.length; i++) {
    let out = 0;
    for (let item of matrix) {
      out += Number(item[i])
    }
    result[head[i]] = out / matrix.length;
  }
  return result
}

console.log(avreger('txt.txt'));

