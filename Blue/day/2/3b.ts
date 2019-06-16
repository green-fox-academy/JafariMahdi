'use strict';

class Dish {
  private name: string;
  private ingredient: object;

  constructor(name: string, ingredient: Object) {
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
    this.id = Math.floor(Math.random() * 9999 - 1000) + 1000;
    this.status = 'created';
  }
  dealy() {
    this.status = 'waiting';
  }
  deliver() {
    this.status = 'delivered'
  }
  reject() {
    this.status = 'reject'
  }
  getdishes() {
    return this.dishes
  }
}
class Online extends Order {
  private adress: string;

  constructor(dishes: Dish[], adress: string) {
    super(dishes)
    this.adress = adress;
  }
}

class Offline extends Order {
  private table: number;

  constructor(dishes: Dish[], table: number) {
    super(dishes)
    this.table = table
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
    for (let dish of order.getdishes()) {
      needIngredient1 += dish.getIngredient()['ingredient1']
      needIngredient2 += dish.getIngredient()['ingredient2']
    }
    if (needIngredient1 >= order.getdishes()['ingredient1'] && needIngredient2 >= order.getdishes()['ingredient2']) {
      needIngredient1 -= order.getdishes()['ingredient1'];
      needIngredient2 -= order.getdishes()['ingredient2'];
      order.dealy();
    } else if (order instanceof Online) { order.deliver() }
    else { order.reject() }
    return order
  }
}

