
class Flower {
    water: number;

    constructor(water) {
        this.water = water;
    }   
}


class Garden{
    plant: Flower[] = [];

    constructor(){}

    addflower(f1){
        this.plant.push(f1);
    }
}


let myflower = new Flower(5);
console.log(myflower);

let firstgarden = new Garden();
firstgarden.addflower(myflower);

console.log(firstgarden.plant[0].water);
