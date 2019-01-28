const fs = require('fs');

let fileContent = fs.readFileSync('/path/to/myfile', 'utf-8');
console.log(fileContent);