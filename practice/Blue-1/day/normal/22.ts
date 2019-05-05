'use strict';

const fs = require('fs');

function reading(file) {
  let read = fs.readFileSync(file, 'utf-8').split('\n');
  try {
    fs.readFileSync(file, 'utf-8')
  }
  catch (e) {
    console.log('there is some problem for reading the file');
  }

  let matrix = read.map(element => element.split(' '));
  let head = ['MatrialRewiv', 'PressSkill', 'helpFulness', 'explantion'];

  let out = {};
  for (let i = 0; i < head.length; i++) {
    let all: number = 0;

    for (let row of matrix) {
      all += Number(row[i])   // use the number for sure, becuse file is string after the split always
    }
    out[head[i]] = all / matrix.length;
  }
  console.log(out);
}

reading('2.txt');





