' use strict';

const fs = require('fs');

let offensiveWords: string[] = ['fuck', 'bloody', 'cock', 'shit', 'fucker', 'fuckstick', 'asshole', 'dick', 'piss']


function familyFrendlizer(file, list) {
  let read = fs.readFileSync(file, 'utf-8').toLowerCase()
  try {
    fs.readFileSync(file, 'utf-8')
  } catch (e) {
    throw new Error("can't read the file")
  }
  let reading = read
  let count = 0;

  list.forEach(element => {
    while (reading.indexOf(element) > -1) {

      reading = reading.replace(element, '  *  ');
      count++
    }
  })
  
  // agar ehtajag be nevashatn file jadid bod 
  function writeFile(path: string, content: string): boolean {
    try {
      fs.writeFileSync(path, content);
      return true;
    } catch (e) {
      return false;
    }
  }
  writeFile('newFile.txt', reading)


  return { count, reading }
}

console.log(familyFrendlizer('cont.txt', offensiveWords));


