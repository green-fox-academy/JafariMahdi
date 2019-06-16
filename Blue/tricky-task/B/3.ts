'use strict';

class Dish {
  private name: string;
  private ingredient: object;

  constructor(name: string, ingredient: object) {
    this.name = name;
    this.ingredient = ingredient;
  }

  getIngredient() {
    return this.ingredient;
  }
}

class Order {
  private id: number;
  private status: string;
  private dishes: Dish[] = [];

  constructor(dishes: Dish[]) {
    this.dishes = dishes;
    this.id = Math.floor(Math.random() * 10000 - 1000) + 1000;
    this.status = 'created';
  }

  dealy() {
    this.status = 'waiting'
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

  constructor(dishes: Dish[], adress: string) {
    super(dishes);
    this.adress = adress;
  }
}

class Offline extends Order {
  private table: number;

  constructor(dishes: Dish[], table: number) {
    super(dishes);
    this.table = table;
  }
}

class Resturant {
  private inventory: object;

  constructor(inventory: object) {
    this.inventory = inventory;
  }

  reciveOrder(order: Order) {

    let needIngredient1 = 0;
    let needIngredient2 = 0;

    for (let item of order.getDishes()) {
      needIngredient1 += item.getIngredient()['ingredient1'];
      needIngredient2 += item.getIngredient()['ingredient2'];
    }

    if (needIngredient1 <= this.inventory['ingredient1'] || needIngredient2 <= this.inventory['ingredient2']) {
      this.inventory['ingredient1'] -= needIngredient1;
      this.inventory['ingredient2'] -= needIngredient2;
      order.deliver();
    }
    else if (order instanceof Online) { order.dealy() }
    else { order.reject() }

    return order
  }
}

let shiraz = new Resturant({ 'ingredient1': 50, 'ingredient2': 50 })


let ghorme = new Dish('ghorme', { 'ingredient1': 7, 'ingredient2': 9 })
let sabzi = new Dish('sabzi', { 'ingredient1': 8, 'ingredient2': 5 })
let fish = new Dish('fish', { 'ingredient1': 4, 'ingredient2': 8 })


let order1 = new Online([ghorme, sabzi], 'andressy utca')
let order2 = new Offline([fish, ghorme], 8);

// shiraz.reciveOrder(new Online([ghorme, sabzi], 'andressy utca'));
// shiraz.reciveOrder(new Offline([fish, ghorme], 8));

console.log(shiraz.reciveOrder(order1));
console.log(shiraz.reciveOrder(order2));
console.log(shiraz);
