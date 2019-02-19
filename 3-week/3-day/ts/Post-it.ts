'use strict';
// Create a PostIt a class that has
// a backgroundColor
// a text on it
// a textColor
// Create a few example post-it objects:
// an orange with blue text: "Idea 1"
// a pink with black text: "Awesome"
// a yellow with green text: "Superb!"


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



