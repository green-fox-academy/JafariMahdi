'use strict';

function Sum(input: number): number {
    let sum = 0;
    for (let i = 0; i <= input; i++) {
        sum += i;
    }
    return sum;
}
console.log(Sum(3));



