'use strict';
const fs = require('fs');

function reading(txtFile) {
  let read = fs.readFileSync(txtFile, 'utf-8').split('\n')
  
  try {
    fs.readFileSync(txtFile, 'utf-8')
  } catch (e) {
    throw new Error('ther is nothing')
  }
  
  let rows = read.map(element => element.split(' '))
  let head = rows.shift();
  let countries = head.slice(0, -1);
  
  
  for (let i = 0; i < countries.length; i++) {
    let find = {}
    
    for (let row of rows) {
      find[row[i]] = row[3]
    }
    
    let find2 = Object.entries(find)  
    let couldestyear = find2[0][1];
    let warmestyear = find2[find2.length -1][1]
    
    let out = `${countries[i]} => ${couldestyear}, ${warmestyear}`
    return out
  }
}

console.log(reading('t2.txt'));


/*
tamrin faghat
let head1 = [ 'A','B', 'C', 'D'];
let rowsy = [[1, 2, 4, 6], [3, 5, 8, 10], [5, 7, 6, 4]];

let result = {};

for (let i = 0; i < head1.length; i++) {
  let out = 0;
  for (let row of rowsy) {
    out += row[i]
  }
  result[head1[i]] = out / rowsy.length;
}
console.log(result);
*/

