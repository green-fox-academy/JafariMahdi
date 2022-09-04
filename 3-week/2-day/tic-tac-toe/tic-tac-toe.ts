
const fs = require('fs');

function readFile(filePath: string): string[][] {
  let fileContent = fs.readFileSync(filePath, 'utf-8');
  let match: string[][] = fileContent.split('\n').map(e => e.split(''));
  return match;
}

function checkLine(line: string[]): string {
  let result: string = '';
  if (line.every(e => e === 'X')) {
    result = 'X';
  }
  if (line.every(e => e === 'O')) {
    result = 'O';
  }
  return result;
}

function convertColumnsToLines(match: string[][]): string[][] {
  let converted: string[][] = [];
  match.forEach(e => converted.push([]));

  for (let i = 0; i < match.length; i++) {
    for (let j = 0; j < match.length; j++) {
      converted[i][j] = match[j][i];
    }
  }
  return converted;
}

function convertDiagonalsToLines(match: string[][]): string[][] {
  let converted: string[][] = [[]];

  for (let i = 0; i < match.length; i++) {
    converted[0].push(match[i][i]);
  }

  for (let row of match) {
    converted.push(row.reverse());
    row.reverse();
  }

  return converted;
}

function ticTacResult(match: string[][]): string {
  for (let i = 0; i < match.length; i++) {
    const row = match[i];
    const column = convertColumnsToLines(match)[i];
    const diagonal = convertDiagonalsToLines(match)[i];

    if (checkLine(row)) return checkLine(row);
    if (checkLine(column)) return checkLine(column);
    if (checkLine(diagonal)) return checkLine(diagonal);
  }
  return 'Draw';
}



try {
  console.log(ticTacResult(readFile('win-o.txt')));
  // Should print "O"

  console.log(ticTacResult(readFile('win-x.txt')));
  // Should print "X"

  console.log(ticTacResult(readFile('draw.txt')));
  // Should print "Draw"
} catch (e) {
  console.log(e.message);
}
