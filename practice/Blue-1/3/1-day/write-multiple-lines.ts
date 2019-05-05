
// Create a function that takes 3 parameters: a path, a word and a number
// and is able to write into a file.
// The path parameter should be a string that describes the location of the file you wish to modify
// The word parameter should also be a string that will be written to the file as individual lines
// The number parameter should describe how many lines the file should have.
// If the word is 'apple' and the number is 5, it should write 5 lines
// into the file and each line should read 'apple'
// The function should not raise any errors if it could not write the file.

let fs = require('fs');

function wirtefiles(path: string, word: string, line: number) {
  let repat = [];
  for (let i = 0; i < line; i++) { repat.push(`${word}\n`) }
  console.log(repat);
  try {
    fs.writeFileSync(path, repat);
  } catch (error) {
    throw new Error("can't read the file");
  }
}
wirtefiles('file.txt', 'apple', 3);

//    ----------------------------------------------

try {
  let read = fs.readFileSync('file.txt', 'utf-8');
  console.log(read);

} catch (err) {
  console.log('ther is some mistake');
}

//                  key words 

//  1- har moghe khasti az list khali baraye .push() estefadeh konid hatma alamte list khali [] ra begzarid ta betavand befahmad ke in list montezere push hast
// 2- 