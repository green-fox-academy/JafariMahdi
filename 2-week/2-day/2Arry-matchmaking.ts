'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// If someone has no pair, he/she should be the element of the array too
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

let girls: string[] = ['Eve', ' Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = [' Joe', ' Fred', ' Tom', ' Todd', ' Neef', ' Jeff'];
let mix: string[] = [];

function makingMatches(a, b) {  // make function whit two argumnet for the boys and girls
    for (let i = 0; i <= a.length; i++) {  // use the loop and codition whit names in list a
        if (a[i] && b[i]) {            // make if condition for both list 
            mix.push(b[i].concat(a[i]))// push whit 'concat' the names in the newlist named mix, if bouth list has name 
        } else if (
            a[i]) {                 // else if  for check the whole lists if one of them dosn't has name, other
            mix.push(a[i])
        } else if (b[i])
            mix.push(b[i])
    }
}
    makingMatches(girls, boys);  // use fanction  and call the argument for that
    console.log(mix);          // call tht new list we made it 


//console.log(makingMatches(girls, boys));
