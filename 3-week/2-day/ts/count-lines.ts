'use strict';

import { listeners } from "cluster";


let fs = require('fs');

function count(filename: string) {
    try {
        let txtcontent = fs.readFileSync(filename, 'utf-8');        // call the file for read
        console.log(txtcontent);
        let list: string[] = [];                      // make string for push that file int 
        list = txtcontent.split('\n');          // make seprate index in list that txt for use line by line whit split  
        console.log(list);
        console.log(list.length);                   // call the numbers index in list
        if (txtcontent == 0) {                                                   // if file is empty 
            console.log('your file is empty my freind');
        }
    }
    catch (error) {
        console.log(error.message);
        // error message
    }


} console.log(count('count-lines.txt'));