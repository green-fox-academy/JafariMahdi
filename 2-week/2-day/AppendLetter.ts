'use strict';
// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.

let far: string[] = ['bo', 'anacond', 'koal', 'pand', 'zebr'];
// The output should be: 'boa', 'anaconda', 'koala', 'panda', 'zebra'


function appendA(input: string[]) {
    let newlist = input.map(value => value.concat('a'))
    return newlist
}
console.log(appendA(far));
