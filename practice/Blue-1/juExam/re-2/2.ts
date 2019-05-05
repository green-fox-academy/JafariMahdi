' use strict';

import { exists } from "fs";

const fs = require('fs');

function readFile(path: string) {
  try {
    return fs.readFileSync(path, 'utf-8').split('\n')
  } catch (e) {
    console.log("can't read the file")
    process.exit
  }
}

function waether(path: string): Object {
  let read = readFile(path);
  let matrix = read.map(element => element.split(' '))
  let head = matrix.shift()
  let countries = head.slice(0, 3)

  let out = '';
  for (let i = 0; i < countries.length; i++) {
    let result = {}

    for (let item of matrix) {
      result[item[i]] = item[3]
    };

    let finder: any[] = Object.entries(result)
    let couldest = finder[0][1];
    let hotest = finder[finder.length - 1][1];

    out += `${countries[i]} => ${couldest}, ${hotest}\n`;
  }
  return out
}
console.log(waether('t2.txt'));
