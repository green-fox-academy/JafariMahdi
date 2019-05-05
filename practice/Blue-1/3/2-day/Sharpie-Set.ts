'use strict';
/*
Reuse your Sharpie class
Create SharpieSet class
    .it contains a list of Sharpie
    .countUsable() -> sharpie is usable if it has ink in it
    .removeTrash() -> removes all unusable sharpies */

import { Sharpie } from './Sharpie'

class SharpieSet {
  sharpies: Sharpie[] = [];  // hamish bayad list khali ro bogzarid  chon aval faght be class sharpie eshareh mikonid 

  add(element: Sharpie) {        // har moghe listi dashtid ke kelass digar ra negah midard hatman bayad method add ya push baraye ferstadan 
    //  objectha be list dashte bashid ta objectha ra be list befrestad
    this.sharpies.push(element)
  }

  countUsable() {
    let count = 0;
    for (let element of this.sharpies) {
      if (element.inkAmount > 0) { count++ } return count;
    }
  }

  removeTrash() {
    for (let i = 0; i < this.sharpies.length; i++) {
      if (this.sharpies[i].inkAmount <= 0) {
        this.sharpies.splice(i, 1);
      }
    }
    return this.sharpies
  }
}

let mysharpies = new SharpieSet();    // baraye estefadeh az methodhaye in cleass bayad az class ke sakhti estefdah konid bayad mysharpies

let yellow = new Sharpie('yellow', 2.3);
mysharpies.add(yellow);
let green = new Sharpie('green', 3.4);
mysharpies.add(green);
green.use();
let blue = new Sharpie('Blue', 4.5);
mysharpies.add(blue)
blue.use(50);
blue.use(50);

console.log(mysharpies);
console.log(mysharpies.countUsable());
console.log(mysharpies.removeTrash());

// class sakhtan be tanhayi kari nemikonad va bayead object az an class sakhte shavad agar mikhahid ba an kar konid
// har moghe dar klass khod fieldi dashtid ke listi az object ra negah midarad bayd khodetan ya autumatic var method add ra niz besazid baray objectha
//  
