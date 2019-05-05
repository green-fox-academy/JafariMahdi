
// Write a function called `sum` that returns the sum of numbers from zero to the given parameter

function sum(input: number) {
  let num = 0;
  for (let i = 0; i <= input; i++) {
    num += i;
  }
  return num;
}
console.log(sum(4));

