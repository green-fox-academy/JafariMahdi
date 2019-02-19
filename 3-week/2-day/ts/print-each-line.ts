'use strict ';
// Write a program that opens a file called "my-file.txt", then prints
// each line from the file.
// If the program is unable to read the file (for example it does not exist),
// then it should print the following error message: "Unable to read file: my-file.txt"


let fs = require('fs');

try {
    let fileContact = fs.readFileSync('print-each line.txt', 'utf-8');
    console.log(fileContact);
} catch (error) {
    console.log('Unable to read file:', error.message);
} finally {
    console.log('we read the file')
}
