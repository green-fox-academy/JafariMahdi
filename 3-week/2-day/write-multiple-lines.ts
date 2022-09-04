'use strict';

let fs = require('fs');         // call fs for the write or read file

function multiple(path: string, word: string, numberline: number) {
    try {
        let write = fs.writeFileSync(path, word, '\n');     // put name and txt for the file for writting and sendit next line \n

        for (let i = 1; i < numberline; i++) {
            fs.appendFileSync(path, word + '\n');        // send next one to next line whit \n
        }
    } catch (error) {
        console.log(error.message);

    } finally {
        console.log(`you wrote txt file with name ${path} ;)`);
    }
}
multiple('first.txt', ' my,apple ', 5);

// Read the File, we wrote it 
try {
    let readfile = fs.readFileSync('first.txt', 'utf-8')
    console.log(readfile);
} catch (error) {
    console.log('there is some mistake');
} finally {
    console.log(`file ${'first.txt'} is done`);
}