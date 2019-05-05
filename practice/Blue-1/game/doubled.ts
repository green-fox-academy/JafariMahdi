'use strict';
// Create a method that decrypts duplicated-chars.txt
let fs = require('fs');

function doplicated(parametr) {
  let read = fs.readFileSync(parametr, 'utf-8');
  let newFile = '';

  for (let i = 0; i < read.length; i += 2) {
    newFile += read[i]
  }
  return newFile
}

console.log(doplicated('duplicated-chars.txt'))


//            key words
// 1- hengami ke for loop estefadeh mikinid besyar tavajoh dashteh bashid vaghti ke az index elementha (.LENGTH ) estefadeh mishavad 
//  Method bad az an ba index kar mikonad 
// 2- bad az khandan file agar niyazi be array kardan an nist mishavad mesl file sadeh az an estefadeh kard.
