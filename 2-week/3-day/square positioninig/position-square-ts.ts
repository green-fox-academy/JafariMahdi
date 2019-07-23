'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function square(x, y) {
    let b = 0;
    for (let i = 0; i < 3; i++) {
        ctx.strokeStyle = 'green';
        ctx.strokeRect(b, b, x, y);
        b += 15;
        x += 25;
        y == 25;
    }
}
square(15, 15);