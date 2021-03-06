'use strict';

export class Sum {
    list1: number[] = [];

    constructor(numbers:any[]) {
        this.list1 = numbers;
    }

    sum(): number {    // return number
        let sumElement=0;
        this.list1.forEach(element => {
            sumElement += element;
        })
        return sumElement;
    }
}

//--------------------------------------------

let test = require('tape');

let mysum = new Sum([1,2,3,4]);
let my2sum = new Sum([]);  // when you have empty array, that will have -0-  number  
let my3sum = new Sum([9]);
let mystring = new Sum(['hi']);  // for string also will give -0-  => 

console.log(mysum,my2sum,my3sum);


test('sum numbers from the list', t => {

    t.equal(mysum.sum(),10);
    t.equal(my2sum.sum(),0);
    t.equal(my3sum.sum(),9);
    t.equal(mystring.sum(),'0hi');  //  have -0- just by self becuse of sum() method we want number for return
    t.end();
    

})