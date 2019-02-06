'use strict ';

class Person {
    name: string;
    age: number;
    gender: string;

    constructor(name: string = 'Jane Done', age: number = 30, gender: string = 'female') {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    public introduce():any {
        console.log(` Hi,I am ${this.name}a ${this.age} year old ${this.gender}`);
    }
    public getGoal() :any{
        console.log('My goal is: live for the moment!');
    }
}
export{Person};

// just the example
const a = 7;