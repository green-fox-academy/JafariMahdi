'use strict ';
import { Person } from './personClass';


class Student extends Person {

    previousOrganization: string;
    skippedDays: number;

    constructor(
        name: string = 'Jane Doe',
        age: number = 30,
        gender: string = 'female',
        lifeSchool: string = 'unknow',
        day: number = 0
    ) {
        super(name, age, gender);

        this.previousOrganization = lifeSchool;
        this.skippedDays = day;
    }
    introduce(): any {
        console.log(` "Hi, I'm ${this.name},a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} 
        days from the course already." `);
    }
    getGoal(): any {
        console.log('Be a junior software developer.');

    }
    skipDays(numberOfDays): any {
        this.skippedDays += numberOfDays;
    }
}
export {Student};