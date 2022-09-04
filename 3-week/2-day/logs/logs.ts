
const fs = require('fs');

function makelist(list) {  // function for make list to hold Elements
  let newlist: number[] = [];
  list.forEach(value => {
    if (!newlist.includes(value)) {
      newlist.push(value)
    }
  });
  return newlist;
}

function uniqueIP(filetxt) {
  let firstlist: string[] = fs.readFileSync(filetxt, 'utf-8').split('\n');
  const uniqueIP = firstlist.map(value => {
    return value.slice(27, 38);
  })
  return makelist(uniqueIP);
}
console.log(uniqueIP('log.txt'));

//-------------------------------------------------------

function ratio(fileName) {
  let content2: string[] = fs.readFileSync(fileName, "utf-8").split("\n");
  let countGet: number = 0;
  let countPost: number = 0;

  for (let i = 0; i < content2.length; i++) {
    if (content2[i].includes("GET /")) {
      countGet++;
    } else if (content2[i].includes("POST /")) {
      countPost++;
    }
  }
  return "GET/POST ratio: " + countGet / countPost;
}

console.log(ratio("log.txt"));

