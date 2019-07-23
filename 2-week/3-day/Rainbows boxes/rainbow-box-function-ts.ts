'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let a: any[] = ['yellow', 'blue', 'green', 'purple', 'pink', 'black'];         // list colors
let e = 180;                    // width for the first square thats black in function we write 
let b = 100;                        // hight for the first square

function rainbow(s, c) {              // function with two argument
    for (let i = 0; i < 7; i++) {        // condition how many times
        ctx.fillStyle = c;                   // style for the fill and  montion for the argument for first color
        ctx.fillRect(e, b, s, s);      // fill the square
        b += 20;                 // for each time loop make bigger the size and location
        e += 20;
        s -= 40;   //Trick make the square smaller each time becuse we start from the big one
        c = a[i];                       // use the list items
    };

}
rainbow(230, 'orange');                 // call the function with first size and first color 
