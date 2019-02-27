import { isNumber } from "util";

let shoppingList = [
   { Milk: 1.07, Rice: 1.59, Eggs: 3.14, Cheese: 12.60, ChickenBreasts: 9.40, Apples: 2.31, Tomato: 2.58, Potato: 1.75, Onion: 1.10 },
  { Milk: 3, Rice: 2, Eggs: 2, Cheese: 1, ChickenBreasts: 4, Apples: 1, Tomato: 2, Potato: 1 },
  { Rice: 1, Eggs: 5, ChickenBreasts: 2, Apples: 1, Tomato: 10 }
];
//Create an application which solves the following problems.

// How much does Bob pay?
let price = Object.values(shoppingList[1]);
let pay: any = 0; price.forEach(element => { 
  pay += element }); console.log(pay);

// How much does Alice pay?

let price1 = Object.values(shoppingList[2]);
let pay1: any = 0; price1.forEach(value => { pay1 += value }); console.log(pay1);

// Who buys more Rice?

let myrice = 0;
  shoppingList.forEach(element =>{
    if(element.Rice > myrice){
      myrice = element.Rice;}
    })
    console.log('Bob',myrice)


// Who buys more Potato?

//Who buys more different products?

// Who buys more products? (piece)?






