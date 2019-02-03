'use strict';

// Create Sharpie class
// We should know about each sharpie their color (which should be a string),
// width (which will be a floating point number), inkAmount (another floating point number)
// When creating one, we need to specify the color and the width
// Every sharpie is created with a default 100 as inkAmount
// We can use() the sharpie objects
// which decreases inkAmount

class Sharpie{
color : string;
width : number;
inkAmount: number;

        constructor(color:string, width:number){
            this.color= color;
            this.width = width ;
            this.inkAmount = 100 ;              // <= give the value to it from the first place
        }
    use(x){
       return this.inkAmount -= x;              // use the function with ** X ** we can also change the resen as well
    }
}
let sharpieMarpie = new Sharpie(' black',400);
sharpieMarpie.use(20);                          // call object whit function and parameter => it change the object !!
console.log(sharpieMarpie);

