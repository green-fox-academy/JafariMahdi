'use strict ';

let fs = require('fs');

try {
    let fileContact = fs.readFileSync('print-each line.txt', 'utf-8');
    console.log(fileContact);
} catch (error) {
    console.log('Unable to read file:', error.message);
} finally {
    console.log('we read the file')
}
