'use strict';

// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz” instead of the number
// and for the multiples of five print “Buzz”.
// For numbers which are multiples of both three and five print “FizzBuzz”.

let num: number=1;
for(let i = 0;i < 100; i ++){

    if(num % 3 === 0){
        console.log('Fizz');
    }else if(num % 5 ===0){
        console.log('Buzz');
    }else if ( num % 3 === 0 && num % 5 === 0){
        console.log('FizzBuzz');
    }else{
        console.log(num);
    }
    num++;
}