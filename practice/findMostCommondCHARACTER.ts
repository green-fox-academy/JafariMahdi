'use strict';

//create a constant that will help us use the 'fs' library's methods
const fs = require('fs');

//write the contents of the file into a string
let contentOfMyFile: string = fs.readFileSync('./txt.txt', 'utf-8');

//from here on, it is just simple string manipulation

let myIndividualLetters: string[] = contentOfMyFile
  .replace(/\s+/g, '')
  .toLowerCase()
  .split('');
console.log(myIndividualLetters);


//count the number of occurences by creating an object
//and storing key-value pairs in it
//keys: individual letters
//values: occurences

function collectOccurences(someStringArray: string[]): object {
  let countOccurencesHere = {};
  for (let i = 0; i < someStringArray.length; i++) {
    if (countOccurencesHere[someStringArray[i]]) {
      countOccurencesHere[someStringArray[i]] += 1;
    } else {
      countOccurencesHere[someStringArray[i]] = 1;
    }
  }
  return countOccurencesHere;
}

let myObjectWithOccurences = collectOccurences(myIndividualLetters);

//write each unique letter to a file
//(each key of the object will be unique since we used that to count the occurences of letters)



function writeUniqueLetter(lettersAsObject: object, filePath: string) {
  let uniqueLettersGoHere: string = Object.keys(lettersAsObject)
    .toString();
  fs.writeFileSync(filePath, uniqueLettersGoHere);
}

writeUniqueLetter(myObjectWithOccurences, './txt.txt');