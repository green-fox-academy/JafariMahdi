'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.

let x: number = 0;
let y: number = 0;
let c: number = 50;
let d: number = 50;

function drawing() {
    ctx.fillStyle = 'black';            //make function for one square with black color
    ctx.fillRect(x, y, c, d);       
    x += 100;
}
function drawing1() {
    ctx.fillStyle = 'black';     //same function just ** X + 50  ** trikc for make space or white color for start at first
    ctx.fillRect(x + 50, y, c, d);      // it's just make space before black square  
    x += 100;
}

for (let i = 0; i <= 7; i++) {  // for loop for drawing in hight
    if (i % 2 === 0) {          // make if to choice start with black or space for each line
        for (let b = 0; b <= 5; b++) {                  
            drawing();
        } }                             // for drawing in width
    else {
        for (let c = 0; c <= 5; c++) {

            drawing1();                 // for drawing in width
    }   }
           x = 0;   //make x again 0 to start from the beginig width  IMPORTANT
           y += 50; //make y or high bigger for going down and not repet in one line just IMPORTANT
}



