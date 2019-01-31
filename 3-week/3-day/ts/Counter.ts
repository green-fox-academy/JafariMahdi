'use strict ';

// Create a Counter class
// which has an integer property
// when creating it should have a default value 0 or we can specify it when creating
// we can add(number) to increase the counter's value by a whole number
// or we can add() without parameters just increasing the counter's value by one
// and we can get() the current value as string
// also we can reset() the value to the initial value

class counter{

    mynumber:number;

    constructor(){
        this.mynumber = 0;
    }

    addnumber(x){
       return  this.mynumber += x;
    }
    add(){
       return  this.mynumber ++;
    }
    get(){
        return this.mynumber.toString();
    }
    reset(){
        return this.mynumber = 0 ;
    }
}
let secoundnumber = new counter;
console.log(secoundnumber.add());
console.log(secoundnumber.addnumber(23));
