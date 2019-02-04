'use strict';

// Create Student and Teacher classes
// # Student
//     .learn()
//     .question(teacher) -> calls the teachers answer method
// # Teacher
//     .teach(student) -> calls the students learn method
//     .answer()


class student {
    learn: number;

    constracter() {
        this.learn = 0;
    }
    point() {
        this.learn += 5;
    }

    qustion(askFromTeacher: teacher) {
        askFromTeacher.answer;
    }
}



class teacher {
    name: string;

    constructor(teachername) {
        this.name = teachername;
    }

    teach(lesson: student) {
        lesson.point();
    }

    answer() {
        console.log('answer');

    }

}
let mahdi = new student;

console.log(mahdi.point);
