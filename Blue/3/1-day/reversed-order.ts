'use strict';
// Create a method that decrypts reversed-order.txt

const fs = require('fs');

function decrypts_order(input) {
  let readFile = fs.readFileSync(input, 'utf-8').split('\n')
  let reveseit = readFile.reverse()

  let newreadFile = readFile.join('\n')

  return newreadFile
}
console.log(decrypts_order('reversed-order.txt'));
