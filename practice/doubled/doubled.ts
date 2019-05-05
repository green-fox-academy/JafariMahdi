
// Create a method that decrypts duplicated-chars.txt

const fs = require('fs');

const orginaltxt = fs.readFileSync('duplicated-chars.txt', 'utf-8');

function decrypts(txtfile: string) {
  let out: string = '';
  for (let i = 0; i < txtfile.length; i++) {
    if (txtfile.charAt(i) !== txtfile.charAt(i + 1)) {
      out += txtfile.charAt(i);
    }
  }
  return out;
}
console.log(decrypts(orginaltxt));
