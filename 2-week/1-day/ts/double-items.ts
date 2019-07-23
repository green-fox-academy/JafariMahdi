'use strict'

let drinks: string[] = ['Gin', 'Whiskey', 'Wine', 'Beer'];

let duobleDrink = drinks.map(value => {
  //value = value+value;
  return value + value;
})
console.log(duobleDrink);
