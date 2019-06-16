'use strict';

const fs = require('fs');

function waether(input) {
  let readFile = fs.readFileSync(input, 'utf-8').split('\n');

  let rows = readFile.map(row => row.split(' '));

  let head = rows.shift()
  let countries = head.slice(0, -1);


  countries.forEach((country, index) => {
    let data = {}
    rows.forEach(row => {
      let year = row[row.length - 1]
      data[year] = row[index]
    });
//console.log(data);

    let output = country + ' => ' + MinMaxSearch(data).join(', ')
   console.log(output)
  });


  /*
    let france = {}
    let sweden = {}
    let germany = {}
  
    for (let i = 0; i < rows.length; i++) {
      france[rows[i][3]] = rows[i][0]
      sweden[rows[i][3]] = rows[i][1]
      germany[rows[i][3]] = rows[i][2]
    }
  
    /*  rows.forEach(element => {
        france[element[3]] = element[0]
        sweden[element[3]] = element[1]
        germany[element[3]] = element[2]
      }); */
  //let outFrance = 'France => ' + MinMaxSearch(france).join(', ');
  //
  //console.log(outFrance);
  //console.log('Sweden', MinMaxSearch(sweden));
  //console.log('Germany', MinMaxSearch(germany));
}


function MinMaxSearch(country) {
  let minValue = undefined
  let maxValue = undefined
  let maxYear = undefined
  let minYear = undefined

  for (let year in country) {
    if (minValue === undefined || minValue > country[year]) {
      minValue = country[year]
      minYear = year
    }

    if (maxValue === undefined || maxValue < country[year]) {
      maxValue = country[year]
      maxYear = year
    }
  }

  return [minYear, maxYear]
}

console.log(waether('2.txt'));



// vaghti mikhahid bishtar az yek return dashte bashid mitavnid ba gozashtan [ ] itemha ra
//  dakhele list gozashte va har chandata ke khastid return konid hamzaman
