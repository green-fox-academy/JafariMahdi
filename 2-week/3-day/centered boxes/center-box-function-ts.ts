'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// While loop 
let i: number = 0;                       // for the while loop we must make varible for the condition in out of the condition => i
let c: string[] = ['green', 'blue', 'red', 'black', 'yellow', 'grey', 'orange', 'brown'];         // list of color for the new square
let b: number = 250;

function square(a) {                     // function whit one argument   
    while (i < 7) {                               // condition
        ctx.strokeStyle = c[i];                      // call color list fr each item
        ctx.strokeRect(b, b, a, a);
        ctx.stroke();
        a += 60;                     // give new hight and wight for the item                            
        b -= 30;   //Trick -=30 for push the next square up and make seprate becuse that start from the top left and if location will be smaller  than start from above           
        i++;                                //  last important part  * closing the loop *
    }
}
square(30);                     // call the function