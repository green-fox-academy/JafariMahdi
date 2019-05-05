'use strict';



let example: string = 'In a dishwasher far far away';

// I would like to replace "dishwasher" with "galaxy" in this example
// Please fix it for me!
// Expected ouput: In a galaxy far far away

let rep = /dishwasher/gi;

let newexample = example.replace(rep, "Galaxy");  // hamishe bayad inja nevesht kalamei ke mikhahid  jadid bashad
console.log(newexample);
