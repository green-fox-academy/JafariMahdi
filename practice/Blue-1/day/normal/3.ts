'use srtict';

class Dish {
  private name: string;
  private ingrediant: object;

  constructor(name: string, ingredient: object) {
    this.name = name;
    this.ingrediant = ingredient;
  }
  getIngrediant() {
    return this.ingrediant
  }
}

class Order {
  private id: number;
  private status: string;
  private dishes: Dish[] = [];

  constructor(dish: Dish[]) {
    this.dishes = dish;
    this.id = Math.floor(Math.random() * 9999 - 1000) + 1000;
    this.status = 'defult';
  }
  dealy() {
    this.status = 'waiting'
  }
  deliver() {
    this.status = 'deliverd'
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
    super(dish);
    this.adress = adress;
  }
}
class Offline extends Order {
  private table: number;

  constructor(dish: Dish[], table: number) {
    super(dish)
    this.table = table;
  }
}

class Resturant {
  private inventory: object;

  constructor(inventory: object) {
    this.inventory = inventory
  }

  reciveOrder(order: Order) {
    let needingrediet1 = 0;
    let needingredient2 = 0;

    for (let dish of order.getDishes()) {
      needingrediet1 += dish.getIngrediant()['ingredient1'];
      needingredient2 += dish.getIngrediant()['ingredient2'];
    }
    if (needingrediet1 >= this.inventory['ingredietn1'] && needingredient2 >= this.inventory['ingredient2']) {
      needingrediet1 -= this.inventory['ingredient1'];
      needingredient2 -= this.inventory['ingredient2'];

      order.deliver()
    }
    else if (order instanceof Online) { order.dealy() }
    else { order.reject() }

    return Order
  }
}