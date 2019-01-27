'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 1 parameter:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.

                                               // While loop 
let i: number= 0;                       // for the while loop we must make varible for the condition in out of the condition => i
let c: string[]  = ['green','blue','red','black','yellow','grey','orange','brown'];         // list of color for the new square
let b : number = 250;

function square(a){                     // function whit one argument   
    while(i < 7){                               // condition
        ctx.strokeStyle = c[i];                      // call color list fr each item
        ctx.strokeRect(b,b,a,a); 
        ctx.stroke();
        a += 60;                     // give new hight and wight for the item                            
        b -=30;   //Trick -=30 for push the next square up and make seprate becuse that start from the top left and if location will be smaller  than start from above           
        i++;                                //  last important part  * closing the loop *
    }
}
square(30);                     // call the function