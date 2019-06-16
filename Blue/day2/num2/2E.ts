'use strict';

let fs = require('fs');
let readFile = fs.readFileSync('2.txt', 'utf-8').split('\n');
let rows = readFile.map(line => line.split(' '))

let head = rows.shift()
let countries = head.slice(0, -1)



countries.forEach((country, index) => {
  let makeObject = {}

  for (let row of rows) {
    makeObject[row[3]] = row[index]

  }
  let out = `${country} => ${findColdWarm(makeObject)}`

  console.log(out);


});


//  yek object va yek value ra migirad va comper mikonad value ra

function findColdWarm(myObject) {
  let cold = undefined;
  let warm = undefined;
  let yearCold = undefined;
  let yearWarm = undefined;

  for (let keys in myObject) {

    if (cold === undefined || cold > myObject[keys]) {
      cold = myObject[keys]
      yearCold = keys
    }

    if (warm === undefined || warm < myObject[keys]) {
      warm = myObject[keys]
      yearWarm = keys
    }
  }

  return [yearCold, yearWarm]
}

// ghesmat gomrah konandeh for in baraye object # keys => manzoe KEY hast dar object va myObject[keys] hast VALUE
// meghdary ajib hast in  chon object hast


//console.log(rows);
