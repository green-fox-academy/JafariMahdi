'use strict ';


class Cohort {
     cohortname:string;
     students:string[];
     Mentors:string[];

    constructor(cohortname:string,students:string[]=[],Mentors:string[]=[]){

       
        this.cohortname= cohortname;
        this.students= students;
        this.Mentors= Mentors;
    }

    public addStudent(student):any{
        this.students.push(student);
    }
    public addMentor(Mentor){
        this.Mentors.push(Mentor);
    }
    public info(){

    }
}
export{Cohort};