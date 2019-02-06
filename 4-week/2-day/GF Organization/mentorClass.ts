'use strict';
import { Person } from './personClass';

class Mentor extends Person {
    level: string;

    constructor(name: string = 'Jane Doa', age: number = 30, gender: string = 'female', level: string = 'intermediate') {
        super(name, age, gender);
        this.level = level;
    }
    getGoal() {
        console.log("Educate brilliant junior software developers.");
    }
    introduce() {
        console.log(` Hi,I am ${this.name}a ${this.age} year old ${this.gender} ${this.level} mentor! `);

    }
}
export{Mentor}