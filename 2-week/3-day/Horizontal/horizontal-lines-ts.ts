'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function horizontal(x, y) {
    for (let i = 0; i <= 5; i++) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(30, 30);
        ctx.strokeStyle = 'red';
        ctx.stroke();

        x += 50;
        y += 50;
    }
}
horizontal(110, 200);