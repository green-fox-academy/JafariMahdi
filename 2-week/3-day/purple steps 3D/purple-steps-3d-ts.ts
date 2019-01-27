'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps-3d/r4.png]


let a : number = 5;     // make varible for the width and hight locatin
let b : number = 10;        // varible for the width and hight for SIZE

function purple_3D(t){                          // functions with argumant for the each one
    for(let i = 0;i < t ; i ++){
        ctx.fillStyle = 'purple';               // fill the color
        ctx.fillRect(a,a,b,b);               // call the varible for the make square
        a +=b;                  // * Trick => use the a+ for make new location, +=b  where the pervios square finished 
        b +=15;         // plus number for the new size 
    }

} purple_3D(8);         // call function with number 