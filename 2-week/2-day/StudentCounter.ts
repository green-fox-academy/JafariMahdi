'use strict';

const students: any[] = [
    { name: 'Theodor', age: 3, candies: 2 },
    { name: 'Paul', age: 9.5, candies: 2 },
    { name: 'Mark', age: 12, candies: 5 },
    { name: 'Peter', age: 7, candies: 3 },
    { name: 'Olaf', age: 12, candies: 7 },
    { name: 'George', age: 10, candies: 1 }
];

// create a function that takes a list of students and logs: 
// - How many candies are owned by students altogether

function student(list: any[]): any {
    let candiesbox: number = 0;
    list.forEach(value => {
        candiesbox += value.candies;
        console.log(value);
    })
    return 'whole candies owned by students is : ' + candiesbox;
}
console.log(student(students));
console.log('---------------------------------');

// create a function that takes a list of students and logs:
// - The sum of the age of people who have less than 5 candies

let ages: number = 0;
function sumage(list: any[]) {
    list.forEach(value => {
        if (value.candies < 5) {
            ages += value.age;
        }
    })
    return 'the sum of age who has less than 5 candies is : ' + ages;
}
console.log(sumage(students));
