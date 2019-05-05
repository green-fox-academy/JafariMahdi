// Create a method that find the 5 most common lottery numbers in lottery.csv
const fs = require('fs');

function lottery(file) {
  let read = fs.readFileSync(file, 'utf-8').split('\n')
  try {
    fs.readFileSync(file, 'utf-8')
  } catch (e) {
    throw new Error(" can't read the file ")
  }
  let seprate = read.map(element => element.split(';'))
  let lottryCode: string[] = seprate.map(item => item[9])

  let result = {};
  for (let item of lottryCode) {
    if (result[item] === undefined) {
      result[item] = 1
    } else {
      result[item]++
    }
  }
  let makelist = Object.entries(result)
  let mostCommon = makelist[0]
  return mostCommon

}
console.log(lottery('lottery.csv'));
