'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.

function square(x,y){
    let b= 0;
    for(let i =0;i <3; i++){
        ctx.strokeStyle = 'green';
        ctx.strokeRect(b,b,x,y);
        b +=15;
        x +=25;
        y ==25;
    }
}
square(15,15);