'use strict';

//Create a PostIt a class that has
//a backgroundColor
//a text on it
//a textColor
//Create a few example post-it objects:
//an orange with blue text: "Idea 1"
//a pink with black text: "Awesome"
//a yellow with green text: "Superb!"


class PostIt {
  backgrandColor;
  text;
  textColor;

  constructor(backgrand: string, text: string, textColor: string) {
    this.backgrandColor = backgrand;
    this.text = text;
    this.textColor = textColor;
  }

}
let orange = new PostIt('orange', 'Idea1', 'blue');
console.log(orange);

let pink = new PostIt('pink', 'Awsome', 'black');
console.log(pink);

let yellow = new PostIt('yellow', 'Superb', 'green');
console.log(yellow);
