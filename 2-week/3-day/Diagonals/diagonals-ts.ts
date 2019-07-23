'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

ctx.strokeStyle = 'grey';
ctx.strokeRect(50, 50, 300, 300);

ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(350, 350);
ctx.strokeStyle = 'red';
ctx.stroke();
