'use strict';

// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

function copy(filename: any) {
    let fs = require('fs');
    try {
        let from = fs.readFileSync(filename, 'utf-8');   // read the file
        let newfile = fs.writeFileSync('copyFile.txt', from);           // wirte new file and use the pervios file
        console.log(newfile);

    }
    catch (error) {
        console.log(error.message);
    } finally {
        console.log(true);
    }
}
copy('first.txt');
