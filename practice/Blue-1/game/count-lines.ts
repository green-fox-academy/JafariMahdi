'use strict'

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

let fs = require('fs')

function readFile(input: string) {
  let line = 0;
  let reading = [];
  try {
    reading = fs.readFileSync(input, 'utf-8').split('\n')

    line = reading.length;
  } catch (e) {
    console.log(0);
  }
  return line
}

console.log(readFile('count_lines.txt'))




//            key words
// 1- 
// 2- ba dadan varible mitavanim meghdare try va catch ra dashte bashim va bazi konim 
// 3- dar akhare function cosole.log gerftim ta line ra az har do ja dashte bashim 
// 4- ba split be rahati mishavad txt ke migirim ra khat be khat khand 
// 5- qutation kheyli moham ast dar  split('\n'); 