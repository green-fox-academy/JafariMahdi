'use strict';

const args = process.argv.splice(2); // Just a helper for you to get started

console.log('Input params are', args);

function calculate(symbol: any, number1: number, number2: number): any {
  let result: number = undefined;
  if (symbol === "+" && isNaN(number1) == false && isNaN(number2) == false) { result = number1 + number2; };

  if (symbol === "-" && isNaN(number1) == false && isNaN(number2) == false) { result = number1 - number2; };

  if (symbol === "*" && isNaN(number1) == false && isNaN(number2) == false) { result = number1 * number2; };

  if (symbol === "/" && isNaN(number1) == false && isNaN(number2) == false) { result = number1 / number2; };

  if (result === undefined) { return 'please input the number and symbol correct' };

  return result;
}
console.log(calculate('*', 4, 3));
