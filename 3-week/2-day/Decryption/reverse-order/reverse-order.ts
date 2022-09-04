// Create a method that decrypts reversed-order.txt

const fs = require('fs');
const myFile = fs.readFileSync('reversed-order.txt', 'utf8');

function reverseOrder(text:string){
  const originalLines = myFile.split('\n');
  const reverseOrderText:string = originalLines.reverse().join('\n');
  return reverseOrderText;
}

console.log(reverseOrder(myFile));