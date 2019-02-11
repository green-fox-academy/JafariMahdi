'us estrict ';

class Aircraft {
    name: string;
    ammo: number;
    max_ammo: number;
    base_damage: number;
    allDamage: number;
    

    constructor(name: string, ammo: number = 0, max_ammo: number, base_damage: number,allDamage?:number) {
        this.name = name;
        this.ammo = ammo;
        this.base_damage = base_damage;
        this.max_ammo = max_ammo;
        this.allDamage = allDamage;
    }

    fight() {
        return this.ammo * this.base_damage;
    }

    refill(request) :any{
        if (request > this.max_ammo) {
            this.ammo += this.max_ammo;
            this.allDamage -= this.max_ammo;
            console.log(`you can fill just ${this.max_ammo}, 
            you have now ${request} more `);
            //`you can fill just ${this.max_ammo}, you have now ${request} more `
        }
        this.allDamage += request;
        return this.allDamage;
    }

    gettype(){
        return this.name;
    }

    getstatus(){
        return `Type ${this.name},AMMO ${this.ammo},Base Damge ${this.base_damage},
        ${this.allDamage} `
    }

    

}

let F37 = new Aircraft("F37",8,8,30);
console.log(F37);
F37.refill(15);
console.log(F37);
F37.getstatus;

// --------------------------------------------------



