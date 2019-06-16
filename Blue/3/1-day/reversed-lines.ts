'use strict';
// Create a method that decrypts reversed-lines.txt

const fs = require('fs');
function reversedLines(input) {
  let readFile = fs.readFileSync(input, 'utf-8').split('\n')
  let newFile = readFile.map(element => element.split(''))

  let reversFile = newFile.map(value => value.reverse())

  let secoundJoin = reversFile.map(item => item.join(''))
  return secoundJoin
}
console.log(reversedLines('reversed-lines.txt'));



//                    key words

// 1- dar method split() va join() fasele kheyli mohem hast beyne do qutation kheyli
// 2- join() faghat ba element dar ARRAY kar mikonad va tabdil mikonad be string sadeh 
//        vali split() ra mitavan dar elementhay ARRAY ya string estefadeh kard 
// 3- agar file ra khandid va dar an file khtha ya line moshakhase bod va khat be khat az an estefadeh bayed kard 
//        hatman az '\n' estefadeh konid line-6
// 4- dar akhare function agar az console.log estefadeh mikonid hamishe dar terminal UNDIFIND khahid dasht 
//        va bayad az RETURN estefadeh kard dar akhare  function