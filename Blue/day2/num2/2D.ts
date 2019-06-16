'use strict';

const fs = require('fs');
let readFile = fs.readFileSync('2.txt', 'utf-8').split('\n');
let rows = readFile.map(row => row.split(' '));

let head = rows.shift();
let countries = head.slice(0, -1);

console.log(countries);
console.log(rows);


for (let i = 0; i < countries.length; i++) {
  let country = {};

  for (let row of rows) {

    country[row[i]] = row[3]
  }

  let listKeysValues = Object.entries(country)
  //console.log(listKeysValues);

  let couldYear = listKeysValues[0][1]
  let warmYear = listKeysValues[listKeysValues.length - 1][1]


  console.log(`${countries[i]}  =>  ${couldYear}, ${warmYear}`);
}


