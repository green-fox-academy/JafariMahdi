'use strict';

class Dish {
  private name: string;
  private ingredient: object;

  constructor(name: string, ingredient: object) {
    this.name = name;
    this.ingredient = ingredient;
  }
  getIngredient() {
    return this.ingredient
  }
}

class Order {
  private id: number;
  private status: string;
  private dishes: Dish[] = []

  constructor(dish: Dish[]) {
    this.id = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000
    this.status = 'defult'
    this.dishes = dish;
  }

  delay() {
    this.status = 'waititng'
  }
  deliver() {
    this.status = 'delivered'
  }
  reject() {
    this.status = 'reject'
  }
  getDishes() {
    return this.dishes
  }
}

class Online extends Order {
  private adress: string;

  constructor(dish: Dish[], adress: string) {
    super(dish)
    this.adress = adress
  }
}

class Offline extends Order {
  private table: number

  constructor(dish: Dish[], table: number) {
    super(dish)
    this.table = table
  }
}

class Resturant {
  private inventory: object;

  constructor(inventory: object) {
    this.inventory = inventory
  }
  reciveOrder(order: Order) {
    let needIngredient1 = 0;
    let needIngredient2 = 0;
    for (let item of order.getDishes()) {
      needIngredient1 += order.getDishes()['ingredient1']; needIngredient2 += order.getDishes()['ingredient2']
    }

    if (this.inventory['ingredient1'] >= needIngredient1 && this.inventory['ingredient2'] >= needIngredient2) {
      this.inventory['ingredient1'] -= needIngredient1;
      this.inventory['ingredient2'] -= needIngredient2;
      order.deliver();
    }
    else if (order instanceof Online && this.inventory['ingredient1'] < needIngredient1 || this.inventory['ingredient2'] < needIngredient2) 
    { order.delay() }
    else { order.reject() }
    return order
  }
}


let shiraz = new Resturant({ ingredient1: 80, ingredient2: 80 })

let dish1 = new Dish('pasta', { ingredient1: 1, ingredient2: 2 });
let dish2 = new Dish('soup', { ingredient1: 2, ingredient2: 2 });
let dish3 = new Dish('dessert', { ingredient1: 2, ingredient2: 1 });
let dish4 = new Dish('fish', { ingredient1: 999, ingredient2: 4 })

let newOrder1 = new Online([dish1, dish2], 'andrassy ut 66');
let newOrder2 = new Online([dish4], 'Bajza utca 5');
let newOrder3 = new Offline([dish2, dish3], 5);
let newOrder4 = new Offline([dish4, dish3], 10);
// call the restaurants receiving the orders
console.log(shiraz.reciveOrder(newOrder1));
console.log(shiraz.reciveOrder(newOrder2));
console.log(shiraz.reciveOrder(newOrder3));
console.log(shiraz.reciveOrder(newOrder4));

