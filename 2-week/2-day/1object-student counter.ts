'use strict';

const students: any[] = [
  {name: 'Theodor', age: 3, candies: 2}, 
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

let box: number = 0 ;

function stu(x,y){
    x.forEach(elemnent => {
         box += elemnent[y];            // use the foreach for each elelment 
         return box;
    });
}   console.log(stu(students,'candies'), ' sum candies :', box);    // call the object you wanna in log


function names(a,b){
    a.forEach(element => {
        console.log(element[b]);
    });
}    names(students,'name');


let ages: number= 0;
function sumage(c,d,e){
    c.forEach(element => {
        if(element[d] < 5){         // if statment for the check the value
            ages += element[e];         // put the age in the new varible
        }
            return ages;
    })
    
}  console.log(sumage(students,'candies','age'), ages );     // call the varible for log 
 

