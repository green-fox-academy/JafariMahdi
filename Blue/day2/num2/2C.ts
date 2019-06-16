'use strict';

let fs = require('fs');
let readFile = fs.readFileSync('2.txt', 'utf-8').split('\n');
let rows = readFile.map(line => line.split(' '));

let others = rows.shift();  //*

let countries = others.slice(0, -1);

let year = others[others.length - 1]  // value hast akharin element others 
//console.log(countries);

countries.forEach((country,index) => {
  let myObject ={}
  for(let item of rows){
    myObject[item[3]]= item[index]
  }
 let outpot = country +'  => ' + coldHotFind(myObject);
console.log(outpot);

});



// object kollan fargh mikonad ba array dar kol
function coldHotFind(myObject) {

  let coldTemp = undefined;
  let coldYear = undefined;
  let hotTemp = undefined;
  let hotYear = undefined;

  for (let myValue in myObject) {
    if (coldTemp === undefined || coldTemp > myObject[myValue]) {
      coldTemp = myObject[myValue]
      coldYear = myValue
    }

    if (hotTemp === undefined || hotTemp < myObject[myValue]) {
      hotTemp = myObject[myValue]
      hotYear = myValue
    }
  }
  return [hotYear, coldYear]

}
//console.log(coldHotFind(france));








// dorost kardan object key and value az list baraye har keshvar
let france = {};
let sweden = {};
let germany = {};

for (let year of rows) {
  france[year[3]] = year[0]
  sweden[year[3]] = year[1]
  germany[year[3]] = year[2]
}
//console.log(sweden);









