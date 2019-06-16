
export class Animal {
  name: string;
  age: number;
  breedType;

  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name
  }

  breed() {
    return this.breedType
  }
}


class Mammal extends Animal {
  breedType = 'pushing miniature versions out.'
}


class Reptile extends Animal {
  breedType = ' laying eggs.'
}

class Bird extends Animal {
  breedType = 'laying eggs.'
}




let reptile = new Reptile("Crocodile");
let mammal = new Mammal("Koala");
let bird = new Bird("Parrot");

console.log("How do you breed?");
console.log("A " + reptile.getName() + " is breeding by " + reptile.breed());
console.log("A " + mammal.getName() + " is breeding by " + mammal.breed());
console.log("A " + bird.getName() + " is breeding by " + bird.breed());


// ma dar " Abstract Inhertance " kelass parent constracur dadim va name ra dar anja ejra kardim  vali az an dar tamami klasshaye childeren 
// estefadeh kardim