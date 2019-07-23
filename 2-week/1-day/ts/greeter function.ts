'use strict'

var nameToGreet: string = 'GreenFox';


function greet(a: string): string {
    let b = 'Greetings ';
    if (a == '') {
        b = 'please input your name';
    } else {
        b += a;
    }
    return b;

}
let c = greet(nameToGreet);
console.log(c);
