// Write a function that takes a filename as a parameter
// The file contains an ended Tic-Tac-Toe match
// We have provided you some example files (draw.txt, win-x.txt, win-o.txt)
// Return "X", "O" or "Draw" based on the input file
let fs = require('fs');

function ticTacResult(input) {

  let readfile = fs.readFileSync(input, 'utf-8').split('\n');
  let makeseprate = readfile.map(line => line.split(''))

  let win = 'Draw';

  // high
  for (let i = 0; i < 3; i++) {
    if (makeseprate[0][i] === makeseprate[1][i] && makeseprate[0][i] === makeseprate[2][i]) {
      win = makeseprate[0][i];
    }
  }
  // width
  for (let i = 0; i < 3; i++) {
    if (makeseprate[i][0] === makeseprate[i][1] && makeseprate[i][0] === makeseprate[i][2]) {
      win = makeseprate[i][0];
    }
  }
  if (makeseprate[0][0] === makeseprate[1][1] && makeseprate[0][0] === makeseprate[2][2]) {
    win = makeseprate[0][0];
  }
  else if (makeseprate[0][2] === makeseprate[1][1] && makeseprate[0][2] === makeseprate[2][0]) {
    win = makeseprate[0][2]
  } 

  return win;
}

console.log(ticTacResult('win-o.txt'))
// Should print "O"

console.log(ticTacResult('win-x.txt'))
// Should print "X"

console.log(ticTacResult('draw.txt'))
// Should print "Draw"


//            key words 

// 1- sakhtan function baraye read  file mitavanad komak konad chandin file ra be sorte hamzaman bekhnid va test konid
// 3- varible khali hamishe komak mikonad ta meghdarhaye mokhtalef begirad va baraye chand chiz estefadeh shavad har bar
// 5- mishavad be jaye else az aval az varible khali baraye false ya shart estefadeh kard va else ra dar akhar estefadeh nakard line 12
// 4- hamisheh else if estefadeh konid bad az if ta if dorost kar bokonad  