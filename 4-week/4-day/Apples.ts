'use strict ';

export class Apple {

    name: string;

    constructor(name) {
        this.name = name;
    }

    getapple() {
        return this.name ;
    }
}
// --------------------------.Test Part =>

let test = require('tape');
let myapple = new Apple('apple juice');  // make new varible form tha Apple class and from the getapple method
console.log(myapple);


test('test apple for the first time', t => {

    t.equal(myapple.getapple(),'apple juice');
    t.end();

})