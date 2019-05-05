'use strict'

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

let fs = require('fs');

function numberOfLine(input) {
  let line = 0;
  try {
    let reading = fs.readFileSync(input, 'utf-8').split('\n');

    line = reading.length;
  } catch {
    line = 0;
  }
  console.log(line);
}

numberOfLine('count_lines.txt')

//            key words
// 1- vaghti file txt ra az jaye dige dar function seda mikonid bayad dakhele ' ' qutation bezarid ta ghabol bokoneh
// 2- ba dadan varible mitavanim meghdare try va catch ra dashte bashim va bazi konim 
// 3- dar akhare function cosole.log gerftim ta line ra az ha do ja dashte bashim 
//  4- ba split be rahati mishavad txt ke migirim ra khat be khat khand 
