'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let b: number = 5;

function purple(n) {
    for (let i = 0; i <= n; i++) {
        ctx.fillStyle = 'purple';
        ctx.fillRect(b, b, 20, 20);        // keep the size and just change the locatin for the new square
        b += 18;                 // new location

    }
}
purple(23);
