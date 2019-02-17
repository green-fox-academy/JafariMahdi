
export class plant {
    color: string;
    absorb: number;
    water: number = 0;
    thirsty: boolean;
    constructor() {
        this.color = '';
    }

    needWater() { }
}

export class Flower extends plant {
    absorb: number = 0.75;
    thirsty: boolean;
    constructor(color: string) {
        super();
        this.color = color;
        this.water = 0;
        this.thirsty= false;
    }

    needWater() {
        if (this.water < 5) {
            this.thirsty = true;
            return `the ${this.color} Flower is needs water`;
        } else { 
            this.thirsty = false;
        }
    }
}

export class Tree extends plant {
    absorb: number = 0.40;
    thirsty: boolean;
    
    constructor(color: string) {
        super()
        this.color = color;
        this.water = 0;
        this.thirsty= false;
    }

    needWater() {
        if (this.water < 10) {
            this.thirsty = true;
            return `the ${this.color} Tree is needs water`;
        } else {
            this.thirsty = false;
        }
    }
}
