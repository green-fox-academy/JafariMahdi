'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

console.log(typeof (currentMinutes));

if (currentHours > 12) {
    currentHours -= 12;
    console.log(currentSeconds + ' ' + currentMinutes + ' ' + currentHours + ' PM');
} else {
    console.log(currentSeconds + ' ' + currentMinutes + ' ' + currentHours + ' AM');

}
