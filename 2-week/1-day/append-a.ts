'use strict';

let animals: string[] = ['koal', 'pand', 'zebr'];

let newanimals: any[] = animals.map(value => {
  value += 'a';
  return value
})
console.log(newanimals);
