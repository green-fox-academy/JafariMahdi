
function readFile(file) {
  const fs = require('fs');
  let readfiles = fs.readFileSync(file, 'utf-8').split('')
  try {
    readfiles
  } catch (e) {
    throw new Error('ther is  not file')
  }
  //console.log(readfiles);
  let convertToObject = {};
  for (let char of readfiles) {
    if (convertToObject[char] === undefined) {
      convertToObject[char] = 1
    }
    else {
      convertToObject[char]++
    }
  }
  let makeListFromObjectForSort: any[] = Object.entries(convertToObject)
  //return makeListFromObjectForSort
  let sortList = makeListFromObjectForSort.sort((a, b) => b[1] - a[1])
  return sortList[0][0]
}

console.log(readFile('2.txt'))

// dar sakhtan varible  moshakhas konid daghighan noe varible ra ta rahatar beshavad value dad mesal let find
// hamishe dar nazar dashte bashid chand ta element az array darid va 1- peyda kardane kochaktar ya bozagtar mikhahid ya 2- chand bar yek element tekrer shode
