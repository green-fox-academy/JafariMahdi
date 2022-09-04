'use strict';

class PostIt {

  backgroundColor: string;
  text: string;
  textColor: string;

  constructor(bc: string, textcolor: string, text: string) {
    this.backgroundColor = bc;
    this.textColor = textcolor;
    this.text = text;
  }

}
let firstPost = new PostIt('orange', 'blue', 'Idea 1');
console.log(firstPost);

let secoundPost = new PostIt('pink', 'black', 'Awsome');
console.log(secoundPost);

let thirdPost = new PostIt('yellow', 'green', 'Superb!');
console.log(thirdPost);



