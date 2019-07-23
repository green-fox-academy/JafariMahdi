'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawing(x, y) {

    for (let i = 0; i < 30; i++) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(300, 100);
        ctx.strokeStyle = 'blue';
        ctx.stroke();
        x += 0;
        y += 10;
    }
}
drawing(60, 100);
