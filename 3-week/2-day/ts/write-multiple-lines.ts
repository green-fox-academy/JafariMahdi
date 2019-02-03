'use strict';

import { appendFileSync } from "fs";

// Create a function that takes 3 parameters: a path, a word and a number
// and is able to write into a file.
// The path parameter should be a string that describes the location of the file you wish to modify
// The word parameter should also be a string that will be written to the file as individual lines
// The number parameter should describe how many lines the file should have.
// If the word is 'apple' and the number is 5, it should write 5 lines
// into the file and each line should read 'apple'
// The function should not raise any errors if it could not write the file.

let fs = require('fs');                         // cal fs for the write or read file

function multiple(path: string, word: string, number: number) {             // function whit 3 argument
    try {
        let write = fs.writeFileSync(path, word +' \n');       // put name and txt for the file  for writting and sendit next line  \n
        let list: any[] = [];

        for (let i = 1; i < number; i++) {
            fs.appendFileSync(path, word + '\n');  // send next one to next line whit \n
        }
    }
    catch (error) {
        console.log(error.message);             // catch the error
    } finally {
        console.log('try again, man ;)');

    }
} multiple('first.txt', ' my,apple ', 5);         // call the function