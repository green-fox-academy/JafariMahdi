'use strict ';


// An average Green Fox attendee codes 6 hours daily
// The semester is 17 weeks long
//
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
//
// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52

let semster: number= 17;
let daily: number= 6 * 5;
let weekly: number= 52; 
let all: number= semster * weekly;

console.log('student spend '+ daily*semster + ' hours in semester for coding');

console.log('coding hours is  %'+ all / 100);
