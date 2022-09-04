'use strict ';
/*
Write a function, that takes two strings and returns a boolean value based on if the two strings are Anagramms or not.
Create a test for that.  */

function anagram(first: string, secound: string) {

    let convert = /[\w]/g;
    let First: string[] = first.match(convert);
    let Secound: string[] = secound.match(convert);

    let f1 = First.sort();
    let s1 = Secound.sort();

    console.log(f1, s1);

    for (let i = 0; i < s1.length; i++) {
        
        if (f1.length !== s1.length) {
            return false;
        }
        if (f1[i] !== s1[i]) {
            return false;
        } else {
            return true
        }
    }
}
console.log(anagram('Ebyasf', 'fsvErt'));

//-------------------------------- Test: =>

let test = require('tape');

test('test our anagram ', t => {
    t.equal(anagram('Ebfas', 'safbE'), true);
    t.end();
})

