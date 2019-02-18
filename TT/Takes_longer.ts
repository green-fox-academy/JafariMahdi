"use strict";
// While saving this quote, a disk error has occured. Please fix it.
// Add "always takes longer than" between the words "It" and "you"

let quote: string = "Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.";

let result = quote.slice(0, quote.indexOf("you")) + "always takes longer than" + quote.slice(quote.indexOf("you"));

console.log(result);

//print: Hofstadter's Law: It always takes longer than you expect, even when you take into account Hofstadter's Law.Í