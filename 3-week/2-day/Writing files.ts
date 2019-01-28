const fs = require('fs');

let fileContent = 'I can write';
fs.writeFileSync('message.txt', fileContent);