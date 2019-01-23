'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.
let color: string[]=['red','green','blue','black'];  // make list  of color for each rectangle

function rectangle(a,b,c,d){          // function with 4 argument  for draw rectangles
    for(let i = 0;i < 4;i++){          // make  loop for the drawing many times
        ctx.strokeStyle = color[i];    // call the list of the colors for use them and "i" mean item
        ctx.strokeRect( a,b,c,d);        // use the arguments 
        ctx.stroke();     
    
        a +=20;
        b +=20;                 // for the new size and location we add some number
        c +=20;
        d +=20;
}
}
rectangle(50,50,50,50);  // call function and put number we want