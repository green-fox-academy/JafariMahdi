'us estrict ';

class Aircraft {
    type: string;
    ammo_store: number;
    max_ammo: number;
    base_damage: number;

    constructor(type: string) {
        if (type === 'F16') {
            this.base_damage = 30;
            this.max_ammo = 8
        }; if (type === 'F35') {
            this.base_damage = 50;
            this.max_ammo = 12;
        }
        this.ammo_store = 0;
        this.type = type;
    }

    fight() {
        return this.ammo_store * this.base_damage;
    }

    refill(refil): any {
        if (refil > this.max_ammo) {
            this.ammo_store += this.max_ammo;
            this.allDamage -= this.max_ammo;
            console.log(`you can fill just ${this.max_ammo}, 
            you have now ${request} more `);
            //`you can fill just ${this.max_ammo}, you have now ${request} more `
        }
        this.allDamage += request;
        return this.allDamage;
    }

    gettype() {
        return this.type;
    }

    getstatus() {
        return `Type ${this.type},AMMO ${this.ammo_store},Base Damge ${this.base_damage},
        ${this.allDamage} `
    }



}

let F37 = new Aircraft("F37", 8, 8, 30);
console.log(F37);
F37.refill(15);
console.log(F37);
F37.getstatus;

// --------------------------------------------------



