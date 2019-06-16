'use strict';

class Person {
  name: string;
  age: number;
  gender: string;

  constructor(name = 'JoneDoea', age = 30, gender = 'female') {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  introduce() {
    console.log(`Hi my name is ${this.name} a ${this.age} year old ${this.gender}`)
  }
  getGol() {
    console.log('My goal is: Live for the moment!')
  }
}



class Student extends Person {
  perviosOrganization: string;
  skippedDays: number;

  constructor(name?, age?, gender?, pervius = 'the school of life', skipDays: number = 0) {
    super(name, age, gender);
    this.perviosOrganization = pervius;
    this.skippedDays = skipDays;
  }

  getGol() {
    console.log('Be a joiner software devoper');
  }
  introduce() {
    console.log(`Hi I am ${this.name} ${this.age} year old ${this.gender} from ${this.perviosOrganization} who skipped ${this.skippedDays} from this course allredy`);
  }

  skipDays(numberOfDay) {
    this.skippedDays += numberOfDay;
  }
}


class Mentor extends Person {

  level: string;

  constructor(name?, age?, gender?, level = 'intermedia') {
    super(name, age, gender)
    this.level = level;
  }

  getGol() {
    console.log("Educate brilliant junior software developers.");
  }

  introduce() {
    console.log(`Hi I am ${this.name} a ${this.age} year old ${this.gender} ${this.level} Mentor`);
  }
}

class Sponsor extends Person {

  company: string;
  hiredStudents: number;

  constructor(name?, age?, gender?, company = 'Google', hire = 0) {
    super(name, age, gender)
    this.company = company;
    this.hiredStudents = hire;
  }

  introduce() {
    console.log(`Hi I am ${this.name} a ${this.age} year old ${this.gender} who repersents ${this.company} and hired ${this.hiredStudents} student so far`);
  }

  hire() {
    this.hiredStudents++
  }

  getGol() {
    console.log('Hire Briliant jouiner sofware devlopers');
  }
}

class Cohort {
  name: string;
  students: Student[] = [];
  mentors: Mentor[] = [];

  constructor(name) {
    this.name = name;
  }

  addStudent(student) {
    this.students.push(student)
  }

  addMentor(mentor) {
    this.mentors.push(mentor)
  }

  info() {
    console.log(`The ${this.name} cohort has ${this.students.length} students and ${this.mentors.length} mentors`);
  }
}



let people = [];

let mark = new Person('Mark', 46, 'male');
people.push(mark)
let jane = new Person();
people.push(jane)

let jhon = new Student('Jason stathom', 20, 'female', 'BME');
people.push(jhon)
let student = new Student();
people.push(student)

let ghandi = new Mentor('Ghandi', 148, 'male', 'SpaceX');
people.push(ghandi)
let mentor = new Mentor();
people.push(mentor);

let sponsor = new Sponsor();
people.push(sponsor);
let elon = new Sponsor('Elon Mask', 46, 'male', 'SpaceX')
people.push(elon)

//-----------------------------------------------

student.skipDays(3);

for (let i = 0; i < 6; i++) {
  elon.hire();
}

for (let i = 0; i < 4; i++) {
  sponsor.hire();
}

for (let person of people) {
  person.introduce();
  person.getGol();
}

let awsome = new Cohort('AWSOME');
awsome.addStudent(student)
awsome.addStudent(jhon);

awsome.addMentor(mentor);
awsome.addMentor(ghandi)

awsome.info();


// 1- list dar parametr constractor gharar nemigirad
// 2- har kelassi ke shakkhti bayd objectsh raniz besazid ta ghabel estafadeh shavad 
// 3- hatman vaghti list sakhti baraye negah dashtan jeloyash list khali begzarid
// 4- vaghti ke Extend miayad mishavad az fieldha estefadeh kard vali methodha na
// 5- vaghti field moshbeh darid bayd az SUPER() estefadeh konid  va faghat dakhele an feildhaye klass parents ra benvisid