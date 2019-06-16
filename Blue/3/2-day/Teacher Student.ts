'use strict';

/*
Create Student and Teacher classes
  Student
      learn()
      question(teacher) -> calls the teachers answer method
  Teacher
      teach(student) -> calls the students learn method
     answer()
 */

class Student {
  name;
  constructor(name) { this.name = name }
  laern() {
    console.log('thanks I understand it');
  }

  question(ask: Teacher) {
    console.log(`dear ${ask.name}I have a question about ...`);
    return ask.answer()
  }
}

class Teacher {
  name;
  constructor(name) { this.name = name }

  teach(lesson: Student) {
    console.log(`sure,${lesson.name} ....`);
    return lesson.laern()
  }
  answer() {
    console.log(`did you googel it `);
  }
}


let student1 = new Student('Mary');

let teacher1 = new Teacher('sanjey');
let teacher2 = new Teacher('perim');


student1.question(teacher1);
teacher1.teach(student1)
student1.question(teacher2)



//   mishavad az dakhele yek kelas d methodhaye klass digar ra seda kard be sharti ke dar parametr an zekr shavad ka ba avalin klass ertebat darad    
//    return ra faramosh nakonid 