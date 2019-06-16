'use strict';

const students: any[] = [
  { name: 'Mark', age: 9.5, candies: 2 },
  { name: 'Paul', age: 12, candies: 5 },
  { name: 'Clark', age: 7, candies: 3 },
  { name: 'Pierce', age: 12, candies: 7 },
  { name: 'Sean', age: 10, candies: 1 }
];

// create a function that takes a list of students and logs:
// - Who has got more than 4 candies

function moreCandies(input) {
  let list = [];
  for (let student of input) {
    if (student.candies > 4) {
      list.push(student.name)
    }
  }
  return list
}
console.log(moreCandies(students));


// create a function that takes a list of students and logs: 
//  - how many candies they have on average

function avarge(input) {
  let candie = 0;
  for (let student of input) {
    candie += student.candies;
  }
  return candie / input.length
}

console.log(avarge(students));
