"use strict";

let quote: string = "Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.";

let result = quote.slice(0, quote.indexOf("you")) + "always takes longer than" + quote.slice(quote.indexOf("you") - 1);

console.log(result);

//print: Hofstadter's Law: It always takes longer than you expect, even when you take into account Hofstadter's Law.Í