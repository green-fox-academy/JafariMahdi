let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables


function time(hour, minute, secound): any {
  if (hour > 12) {
    hour -= 12;
    console.log('PM ' + hour, minute, secound)
  } else {
    console.log('AM ' + hour, minute, secound);
  }
}
time(currentHours, currentMinutes, currentSeconds);