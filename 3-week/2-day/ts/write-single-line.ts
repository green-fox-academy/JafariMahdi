'use strict';

import { resolveTxt } from "dns";

// Write a function that is able to manipulate a file
// By writing your name into it as a single line
// The file should be named "my-file.txt"
// In case the program is unable to write the file,
// It should print the following error message: "Unable to write file: my-file.txt"

let fs = require('fs');
let txt = 'Mahdi';

try {
    let write = fs.writeFileSync('my-file.txt', txt);  // write the new file giving the name and text inside by call the varible also
    //throw new SyntaxError('is there any file ?');              // make our own syntaxerror
} catch (error) {
    console.log(' can\'t find the file ' + error.message);        // put our own message error in the error file

} finally {
    console.log('we wrote our first line');               // finall 
}


let txt2 = 'Hello there';
try {
    let write2 = fs.writeFileSync('Hello there.txt', txt2);

} catch (error) {
    console.log('can\'t find the Hello there');

} finally {
    console.log('Hello there file is done');

}