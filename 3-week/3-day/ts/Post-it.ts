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
    backgroundColor: string;            // 
    text: string;
    textColor: string;

    constructor(Bcolor: string, t: string, tx: string) {
        this.backgroundColor = Bcolor;
        this.text = t;
        this.textColor = tx;
    }
}

let Idea = new PostIt('orange', 'Idea', 'blue');
let Awesome = new PostIt('pink', 'Awsome', 'blue');
let Superb = new PostIt('yellow', 'Superb!', 'green');

console.log(Awesome);
