// Create a method that decrypts reversed-lines.txt

const fs = require('fs');

let txtfile = fs.readFileSync('reversed.txt', 'utf-8');

function reversed(file: string) {
  let firstchange = file.split('\n');
  console.log(firstchange);           // for test it
  let revtxt: string = '';
  firstchange.forEach(value => {
    let revline: string = '';
    for (let i = value.length; i > 0; i--) {
      revtxt += value.charAt(i - 1);
    }
    revtxt += '\n';
    revtxt += revline;
  });
  return revtxt;
}
console.log(reversed(txtfile));

