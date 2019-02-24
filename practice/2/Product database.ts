/*
We are going to represent our products in a map where the keys are strings representing 
the product's name and the values are numbers representing the product's price.

Create a map with the following key-value pairs. */

let product = new Map();
product.set('Eggs',200);
product.set('Milk',200);
product.set('Fish',400);
product.set('Apples',150);
product.set('Bread',50);
product.set('Chicken',550);
console.log(product);
// Create an application which solves the following problems.
// How much is the fish?
console.log(product.get('Fish'));
// What is the most expensive product?
let expensive =0;
product.forEach(value =>{if(value > expensive){expensive = value} }); console.log('expensive is',expensive);

//  What is the average price?
let all =0;
product.forEach(function (value) {  all += value}); console.log(all );
console.log('the average is',all / product.size);

// How many products' price is below 300?
let bellow =0;
product.forEach(value =>{ if( value < 300){ bellow++} });console.log(`there is ${bellow} price bellow`);

// Is there anything we can buy for exactly 125?

// What is the cheapest product? 