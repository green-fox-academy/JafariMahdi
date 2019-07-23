
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let size: any = undefined;

function draw(size) {
    let x1: number = 30;
    let y1: number = 600;

    let x2: number = 0;
    let y2: number = 0;

    for (let i = 0; i <= size; i++) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = 'green';
        ctx.stroke();

        y2 += 30;
        x1 += 30;
    }
} draw(19);

function draw2() {
    let x1: number = 600;
    let y1: number = 30;
    let x2: number = 0;
    let y2: number = 0;

    for (let i = 0; i <= 19; i++) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = 'purple';
        ctx.stroke();

        y1 += 30;
        x2 += 30;
    }
} draw2();