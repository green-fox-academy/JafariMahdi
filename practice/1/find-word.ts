'use strict';

// There is a not so family friendly text in the `content.txt`
// Create a function named familyFriendlizer that takes a filename and a list of strings as parameters
// and remove all the given words from the file and returns the amount of the removed words.

let offensiveWords: string[] = ['fuck', 'bloody', 'cock', 'shit', 'fucker', 'fuckstick', 'asshole', 'dick', 'piss'];


const fs = require('fs');

function readFile(path: string): string {
  try {
    return fs.readFileSync(path, 'utf-8');
  } catch (e) {
    throw new Error('File does not exist!');
  }
}


function writeFile(path: string, content: string): boolean {
  try {
    fs.writeFileSync(path, content);
    return true;
  } catch (e) {
    return false;
  }
}
// FIND THE WORD IN A LIST

function familyFriendlizer(path: string, listOfWords: string[]): number {
  const content = readFile(path).toLowerCase();
  let contentFiltered = content;
  let wordCounter = 0;

  listOfWords.forEach(function (currentWord: string): void {
    while (contentFiltered.indexOf(currentWord) > -1) {

      contentFiltered = contentFiltered.replace(currentWord, '');
      wordCounter++;
    }
  });

  writeFile(path, contentFiltered);

  return wordCounter;
}

console.log(familyFriendlizer('content.txt', offensiveWords)); // should print out 17
