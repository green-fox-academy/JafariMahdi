'use strict';

let num: number = 1;
for (let i = 0; i < 100; i++) {

    if (num % 3 === 0 && num % 5 === 0) {
        console.log('FizzBuzz');
    } else if (num % 3 === 0) {
        console.log('Fizz');
    } else if (num % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(num);
    }
    num++;
}