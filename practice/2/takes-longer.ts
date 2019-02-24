'use strict';
// While saving this quote, a disk error has occured. Please fix it.
// Add "always takes longer than" between the words "It" and "you"

let quote: string = 'Hofstadter\'s Law: It you expect, even when you take into account Hofstadter\'s Law.';

let add = " always takes longer than ";
quote= quote.slice(0,quote.indexOf('you'))+ add+quote.slice(quote.indexOf('you') -1);


console.log(quote);