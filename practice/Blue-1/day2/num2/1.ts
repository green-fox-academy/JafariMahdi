'use strict';
/*
Here at A66 we can request chip usage from the operator. Unfortunately it is stored in raw CSV format so we need to parse it. 
Your task is to clean up the data and print the chip usage to the console in a more readable format. You can check the file, 
it is added to this repository. Of course the names and dates are shuffled to keep the privacy.

Each line represents an entry and contains the following information:

Id,Date and Time,Event message,Event number,Object #1,Description #1,Object #2,Description #2,Object #3,Description #3,Object #4,Description #4,Card number
1,2019.01.02. 9:21:49,Access granted,203,12,A66 - 04 FÕBEJÁRAT (F-1) Door #1,5,Czender András,0,,0,,00215:09895
...
During the development you will need only a two fields from the input:

Description #1 - the used door
Card number
Your task is to count how many times a chip was used at the main door (A66 - 04 FÕBEJÁRAT (F-1) Door #1) Below you can see the tail of the expected return value.
{
  ...,
  '00088:56736': 3,
  '00247:27091': 2,
  '00038:28945': 2,
  '00155:46240': 1,
  '00089:01168': 2,
  '00042:36689': 1,
  '00153:30309': 1
}     */

const fs = require('fs');

function A66(input) {

  let readFile = fs.readFileSync(input, 'utf-8').split('\n');
  let rows = readFile.map(value => value.split(' '));   // make list by rows
  //console.log(rows);

  let uniqList = [];
  for (let element of rows) {
    if (element[6] === '04' || element[6] === 'F-1')
      uniqList.push(element)
  }
  let newUniqList = uniqList.map(value => { return value[11].slice(-11, -1) })    //  make Array just for  IDCode or CardNumber and use the RETURN*
  //console.log(newuniqList);

  let ArrayToObject = {};           // converting Array to object to find elelemnts how many time repeat it

  for (let idCode of newUniqList) {
    if (ArrayToObject[idCode] === undefined) {
      ArrayToObject[idCode] = 1
    } else {
      ArrayToObject[idCode]++
    }
  }


  let objectToArray = [];                 // converting Object to Array for sorting element

  for (let item in ArrayToObject) {
    objectToArray.push([item, ArrayToObject[item]])
  }

  let sort = objectToArray.sort((a, b) => b[1] - a[1]);   // sort from the biggest to small
  return sort
}
console.log(A66('1.csv'));


//                  key words
// 1- har moghe ke undifind dashti dar jayi mitavanid az  return estefadeh koni khah function bashad ya varible ba tavajoh be method






//              Mate
/*
const fs = require('fs');

function count_ids(filename) {
  let rows = fs.readFileSync(filename, 'utf-8').split('\n');
  let result = {};

  for (let row of rows) {
    let parts = row.split(',');
    if (parts[5] === 'A66 - 04 FÕBEJÁRAT (F-1) Door #1') {
      let card_number = parts[parts.length - 1];
      if (result[card_number] === undefined) {
        result[card_number] = 1;
      } else {
        result[card_number]++;
      }
    }
  }
  return result;
}

console.log(count_ids('1.csv'));
*/