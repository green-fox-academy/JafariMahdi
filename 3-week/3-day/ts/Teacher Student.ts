'use strict';

class Student {

    question(teacher: Teacher) {
        console.log("Student: Can you tell me...?")
        teacher.answer();
    }

    learn() {
        console.log("Student: Thank you! Now I understand.")
    }
}

class Teacher {

    teach(student: Student) {
        console.log("Teacher: It is very important to....")
        student.learn();
    }

    answer() {
        console.log("Teacher: Have you googled it?")
    }
}

let joe = new Student();
let mrsLockwood = new Teacher();

joe.question(mrsLockwood);
console.log("---------------------------")
mrsLockwood.teach(joe);

