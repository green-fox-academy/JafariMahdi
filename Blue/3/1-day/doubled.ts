'use strict';
// Create a method that decrypts duplicated-chars.txt
let fs = require('fs');

function dubled(input) {
  let fileContent: string = ''
  try {
    fileContent = fs.readFileSync(input, 'utf-8');
  }
  catch (error) {
    console.log('we got error', error)

  }


  let doubledCharacters: string = '';

  for (let item = 0; item < fileContent.length; item++) {
    if (fileContent.charAt(item) !== fileContent.charAt(item + 1)) {

      doubledCharacters = doubledCharacters.concat(fileContent.charAt(item))
    }
  }

  return doubledCharacters
}

console.log(dubled('duplicatedd-chars.txt'));




//            key words

// 1- hengami ke for loop estefadeh mikinid besyar tavajoh dashteh bashid vaghti ke az index elementha (.LENGTH ) estefadeh mishavad 
//  Method bad az an ba index kar mikonad ya ba elementha  mesl line-12 methid chaAt() ba index faghat kar mikonad
// 2- bad az khandan file agar niyazi be array kardan an nist mishavad mesl file sadeh az an estefadeh kard line-6




