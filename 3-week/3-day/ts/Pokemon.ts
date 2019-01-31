'use strict ';

// Every pokemon has a name and a type. Certain types are effective against others, e.g. water is effective against fire.

// You have a Pokemon class with a method called isEffectiveAgainst().

// Ash has a few pokemon. Help Ash decide which Pokemon to use against the wild one.

// You can use the already created pokemon files.


class pokman{
    name: string;
    type: string;

    constructor(name: string, input:string){
        this.name= name;
        this.type = input;
    }

isEffectiveAginest(x){
    if (x === 'fire'){
        this.type = 'fire';
    }if(x === 'water'){
        this.type= 'water';
    }
}

}  let mypok = new pokman('cloud','fire');
console.log(mypok);
let pok2 = new pokman('mahdi','water');
console.log(pok2);


