'use strict'
// Write a function that is able to manipulate a file
// By writing your name into it as a single line
// The file should be named "my-file.txt"
// In case the program is unable to write the file,
// It should print the following error message: "Unable to write file: my-file.txt"

let fs = require('fs');

function manipulate(name, word) {
  try {
    fs.writeFileSync(name, word);
  }
  catch (error) {
    throw new Error('Unable to wite file : my_file.txt')
  }
}
manipulate('myFile.txt', 'mahdi');


//            key words

// 1-  vaghti file jadidi ra neveshtid bayad run konid ta file jadid sakhte shavad  
// 2- agar az FINALL { } estafdaeh konid mitavnid befahmid ka kar anjam shode ast va shoma file jadid darid

