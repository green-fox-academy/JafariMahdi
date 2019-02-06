'use strict ';
import { Person } from './personClass';

class Sponsor extends Person {

    company: string;
    hiredStudents: number;

    constructor(name: string = 'Jon Doe', age: number = 30, gender: string = 'female', company: string = 'google', hire: number = 0) {

        super(name, age, gender);

        this.company = company;
        this.hiredStudents = hire;
    }
    public hire(): any {
        this.hiredStudents++;
    }
    public introduce(): any {
        console.log(` Hi,I am ${this.name}a ${this.age} year old ${this.gender} who represents ${this.company} and hired
             ${this.hiredStudents} students so far. `);
    }
    public getGoal(): any {
        console.log("Hire brilliant junior software developers.");
    }
}
export {Sponsor};