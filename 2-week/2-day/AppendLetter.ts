'use strict';

let far: string[] = ['bo', 'anacond', 'koal', 'pand', 'zebr'];
// The output should be: 'boa', 'anaconda', 'koala', 'panda', 'zebra'


function appendA(input: string[]) {
    let newlist = input.map(value => value.concat('a'))
    return newlist
}
console.log(appendA(far));
