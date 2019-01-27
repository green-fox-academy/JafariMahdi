'use strict';

const students: any[] = [
  { name: 'Mark', age: 9.5, candies: 2 },
  { name: 'Paul', age: 12, candies: 5 },
  { name: 'Clark', age: 7, candies: 3 },
  { name: 'Pierce', age: 12, candies: 7 },
  { name: 'Sean', age: 10, candies: 1 }
];

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies


function more(x, s, y) {
  x.forEach(element => {
    if (element[y] > 4) {
      console.log(element[s], element[y]);              // call the name and number of who has more than 4  candies 
    }
  });
}   more(students, 'name', 'candies');



console.log('-------');
// create a function that takes a list of students and logs: 
//  - how many candies they have on average

let g: number = 0;

function all(x, y) {
  x.forEach(element => {
    g += element[y];
    
  })
  let b = g / 5;  // we have to use** y.lenght ** for this line but that not worke here ????

    console.log(b);


} console.log(all(students, 'candies'));