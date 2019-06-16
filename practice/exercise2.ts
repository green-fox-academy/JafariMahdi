'use strict';

function cardUsageData(someFile: string): object {

  const fs = require('fs');
  
  let fileContentAll: string = '';
  try {
    fileContentAll = fs.readFileSync(someFile, 'utf-8');
  }
  catch (error) {
    console.error(error);
  }

  let fileContentRows: string[] = fileContentAll.split(/[\n\r]+/);
  let clearedData: { [key: string]: number } = {};

  fileContentRows.forEach((row: string): void => {
    let columns: string[] = row.split(',');

    // descrpition1 = columns[5]; cardNumber = columns[12];
    if (clearedData[columns[5]] && clearedData[columns[12]]) {
      clearedData[columns[12]] += 1;
    } else {
      clearedData[columns[12]] = 1;
    };
  });
  
  //last row is empty, thus for last row of clearedData will be undefined
  return clearedData;
};

cardUsageData('logs.csv');