'us estrict';

const fs = require('fs');
function read() {
  try {
    fs.readFileSync('2.txt', 'utf-8')
  }
  catch (e) {
    throw new Error('there is nothing')
  }
}

function reading(file) {
  let readfile = fs.readFileSync(file, 'utf-8').split('\n')
  let listOfRead = readfile.map(element => element.split(' '));
  let result = '';

  let head = ['mateRewiv', 'presSkil', 'helpfulnes', 'explaention']

  for (let i = 0; i < head.length; i++) {
    let out = 0;
    listOfRead.forEach(element => {
      out += Number(element[i])
    });
    let print = out / listOfRead.length;
    result +=`\n ${head[i]} => ${print}`


  }
  return result
}
console.log(reading('2.txt'));
