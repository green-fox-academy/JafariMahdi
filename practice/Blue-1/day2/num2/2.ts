'use strict ';
/*
An organization focused on environment protection kept track of the average temperature of three European countries to raise 
awareness of climate change. They stored their data of the last 22 years in a txt file that you can find here. Your job is to 
parse the data and find the relevant information as described in the task below.

Every data piece is seperated by a whitespace
Each line represents the average temperature of each country in the given year
The actual year can be found at the end of each line
Task
The organization would like to know the coldest and hottest year in each country. Please write a method that can read and parse the txt file mentioned above.

The application should have one parameter, the file path
The application should write to the console if the file was not found and stop gracefully
The application should write the data to the console as key => value pairs.
Example
Input

France Sweden Germany Year
16 16 17 1996
16 15 18 1997
17 18 18 1998
17 17 18 1999 
Output

France => 1996, 1998
Sweden => 1997, 1998
Germany => 1996, 1997
*/

const fs = require('fs');

function weather(name) {
  let readFile = fs.readFileSync(name, 'utf-8');
  let rows = readFile.split('\n');
  let headParts = rows[0].split(' ');

 // ------------------------    1

  let countries = [];

  for (let countryIndex = 0; countryIndex < headParts.length - 1; countryIndex++) {
    countries[countryIndex] = { name: headParts[countryIndex] }
  }
   console.log(countries)     //az har keshvari ye object dorost kardim 

  // -----------------------------------------  2

  for (let rowsIndex = 1; rowsIndex < rows.length; rowsIndex++) {
    let rowsPart = rows[rowsIndex].split(' ');                      //  baraye har khat element joda dorost kardim

    let cournetYear = rowsPart[rowsPart.length - 1];            //  sal ro varible moshakhas dadim  


    for (let countryIndex = 0; countryIndex < rowsPart.length - 1; countryIndex++) {  // baraye har element 

      let currentCountry = countries[countryIndex];
      let currentTemperator = rowsPart[countryIndex];

      if (currentCountry.warmest === undefined || currentCountry.warmest.temperature < currentTemperator) {
        currentCountry.warmest = { temperature: currentTemperator, year: cournetYear, };
      }
      if (currentCountry.coldest === undefined || currentCountry.coldest.temperature > currentTemperator) {
        currentCountry.coldest = { temperature: currentTemperator, year: cournetYear, };
      }
    }
  }

  let outPut = countries.map(country => `${country.name} => ${country.coldest.year}, ${country.warmest.year} `);
  return outPut.join('\n');
}

console.log(weather('2.txt'));









/*

let listAval = [['zia', 'rejmond'], ['peter', 'blanka'], ['mate', 'frozsi']];

let listDovom = [];

for (let element = 0; element < listAval.length; element++) {
  listDovom[element] = { name: listAval[element] };

}
console.log(listDovom);
*/
// besyar sadeh va manteghi hast shoma elemnthayi ra ke mikhahid dar list jadid dashte bashid  ra ba dadan key va list ghabli va elemenet value midahid





