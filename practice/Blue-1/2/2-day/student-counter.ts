
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

function candies(input) {
  let allCandies = 0
  input.forEach(element => {
    allCandies += element.candies
  });
  return allCandies
}
console.log(candies(students));

// create a function that takes a list of students and logs:
// - The sum of the age of people who have less than 5 candies

function ages(input) {
  let sumOfAge = 0;
  for (let element of input) {
    if (element.candies < 5) {
      sumOfAge += element.age
    }
  }
  return sumOfAge
}
console.log(ages(students));
