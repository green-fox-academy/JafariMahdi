'use strict';
// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful
const fs = require('fs');

function copy(filename) {
  try {
    let readfile = fs.readFileSync(filename, 'utf-8')

    fs.writeFileSync('copy.txt', readfile);
    return true

  } catch (e) {
    return false

  }
}

console.log(copy('file.txt'))