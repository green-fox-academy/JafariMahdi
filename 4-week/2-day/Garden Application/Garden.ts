'use strict';
import { Flower, Tree, plant } from './plant';

class Garden {
    storePlane: plant[];

    constructor() {
        this.storePlane = [];
    }

    addToStore(x: plant) {
        this.storePlane.push(x);
    }


    Watering() {
        this.storePlane.forEach(element => {
            element.water += 40 * element.absorb;
        })
    }

}

let myflower = new Flower('blue');
let myflower2 = new Flower('yellow');
let mytree = new Tree('purple');
let mytree2 = new Tree('orange');
let mygarden = new Garden();

mygarden.addToStore(myflower);
mygarden.addToStore(myflower2);
mygarden.addToStore(mytree);
mygarden.addToStore(mytree2);

mygarden.Watering();

/*
console.log(mygarden);
console.log(mygarden.storePlane);
console.log(mygarden.storePlane[0]);
console.log(mygarden.storePlane[0].color);
console.log(mygarden.storePlane[0].needWater());*/

