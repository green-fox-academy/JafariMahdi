'use strict';


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
