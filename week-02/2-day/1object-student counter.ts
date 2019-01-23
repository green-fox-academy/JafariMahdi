'use strict';

const students: any[] = [
  {name: 'Theodor', age: 3, candies: 2}, // teodor 
  {name: 'Paul', age: 9.5, candies: 2},
  {name: 'Mark', age: 12, candies: 5},
  {name: 'Peter', age: 7, candies: 3},
  {name: 'Olaf', age: 12, candies: 7},
  {name: 'George', age: 10, candies: 1}
];

// create a function that takes a list of students and logs: 
// - How many candies are owned by students altogether

// create a function that takes a list of students and logs:
// - The sum of the age of people who have less than 5 candies

let box: any = 0;

function stu(x,y : string): any{
    x.forEach(elemnent => {
        console.log(elemnent[y]);
         box += elemnent[y];
         return box;
    });

}

console.log(stu(students,'candies'), box);

