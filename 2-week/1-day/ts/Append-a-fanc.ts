'use strict';

let typo: string = 'Chinchill';

function appendAFunc(input: string): string {
    input += 'a';
    return input;

    //return input.concat('a');        Secound Soleution

}

console.log(appendAFunc(typo));

