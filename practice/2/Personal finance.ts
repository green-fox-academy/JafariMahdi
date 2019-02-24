
//Create a list with the following items.
// 500, 1000, 1250, 175, 800 and 120

let mylist: number[] = [500, 1000, 1250, 175, 800, 120];

//Create an application which solves the following problems.
// How much did we spend?
let spend = 0; mylist.map(value => { spend += value }); console.log(spend);

// Which was our greatest expense?
let i=0; mylist.forEach(value =>{if(value > i){ i = value} }); console.log('the must expensive is',i);

// Which was our cheapest spending?
let b = mylist[2]; mylist.map(value =>{ if(value < b){b = value}}); console.log(b);

//What was the average amount of our spendings?
let average = spend / mylist.length; console.log(average);


