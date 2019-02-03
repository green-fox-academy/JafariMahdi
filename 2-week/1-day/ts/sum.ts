// -  Write a function called `sum` that sum all the numbers until the given parameter
// -  The function should return the result
let numbers: number[] = [0, 8, 9, 5, 4];


function sum(numbers: number[], sumUntil: number) {
    let result: number = 0;
    for (let i = 0; i <= sumUntil; i++) {
        result += numbers[i];
    }
    return result;
}
console.log(sum(numbers, 2));
console.log(sum(numbers, 4));


