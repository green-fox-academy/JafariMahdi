// Write a program that opens a file called "my-file.txt", then prints
// each line from the file.
// If the program is unable to read the file (for example it does not exist),
// then it should print the following error message: "Unable to read file: my-file.txt"

let fs = require('fs');

try{
  
  let readfile =fs.readFileSync('my-file.txt','utf8');
  console.log(readfile);
  
}catch(error){
  console.log('Unable to read file: my-file.txt body => '+error);
  
}

//          key words
// 1- shart bayad dakhele TRY{ } anjam shavad ta test shavad
// 2- dar catch mitavanid tanha error  ra niz bogzarid 