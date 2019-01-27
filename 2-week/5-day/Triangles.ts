const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function Tringle(x, y) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 50, y);
    ctx.lineTo(x + 25, y - 50);
    ctx.lineTo(x, y);
    ctx.stroke();
}
let xSize = 300;
let ySize = 200;

for (let i = 0; i < 8; i++) {
  
        for (let j = 0; j <= i; j++) {
            Tringle(xSize + j * 50, ySize);
    }

    xSize -= 25;
    ySize += 50;

}





