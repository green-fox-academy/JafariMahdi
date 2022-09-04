'use strict';
class Sharpie {
    color: string;
    width: number;
    inkAmount: number;

    constructor(color: string, width: number, inkAmount: number = 100) {
        this.color = color;
        this.width = width;
        this.inkAmount = inkAmount;
    }
    use() {
        this.inkAmount--;
    }
}

let sharpie1 = new Sharpie(' black', 400);
console.log(sharpie1);
sharpie1.use();
console.log(sharpie1);
