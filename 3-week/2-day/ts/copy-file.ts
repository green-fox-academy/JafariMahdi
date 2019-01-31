'use strict';

// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

function copy(filename){
    let fs = require('fs');
try{
    let from = fs.readFileSync(filename,'utf-8');
    
}
catch (error){
    console.log(error.message);
    

}finally{
    console.log(' hello ');
    
}
}
