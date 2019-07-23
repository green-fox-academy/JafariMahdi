'use strict';

const students: any[] = [
  { name: 'Mark', age: 9.5, candies: 2 },
  { name: 'Paul', age: 12, candies: 5 },
  { name: 'Clark', age: 7, candies: 3 },
  { name: 'Pierce', age: 12, candies: 7 },
  { name: 'Sean', age: 10, candies: 1 }
];

function more(list: any[]) {
  list.forEach(value => {
    if (value.candies > 4) {
      console.log(value.name + ' has more than 4 candies: ');
    }
  });
}
more(students);
console.log('------------------------');


let allCandies: number = 0;

function all(list: any[]) {
  for (let i = 0; i < list.length; i++) {
    allCandies += list[i].candies;
  }
  let average = allCandies / list.length;
  return 'all candies is :' + allCandies + ', and average of all candies is : ' + average;
}
console.log(all(students)); 