'use strict';
//  ‹find the must pupoler city

let rows = [
  ['hungrey', 'budapest'],
  ['hungrey', 'debresen'],
  ['hungrey', 'budapest'],
  ['austria', 'wien'],
  ['austria', 'graz'],
  ['hungrey', 'pecs'],
  ['austria', 'tirol']
]
let result = {};

for (let row of rows) {
  let country = row[0]
  let city = row[1]

  if (result[country] === undefined) {
    result[country] = { [city]: 1 };  // result = { }
  } else if (result[country][city] === undefined) {
    result[country][city] = 1;  // result = { country: { } }
  } else {
    result[country][city] += 1;
  }
}
console.log(result);




