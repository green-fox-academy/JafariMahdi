'use strict';

class patient {
  severit: number;

  retrive() {
    return this.severit = Math.floor(Math.random() * 10) + 1;
  }
  treat() {
    let treatIt = this.retrive();
    return treatIt--;
  }
}

abstract class Queue {
  patients: patient[];

  addPaitents(person: patient) {
    this.patients.push(person)
  }

  abstract nextPatient(): void;
}


class SafeQueue extends Queue {

  highstSeverity() {
    if (this.patients.length <= 0) { return null }

    let highseverity = undefined;
    for (let person = 0; person < this.patients.length; person++) {
      if (this.patients[person].retrive() <= 0) { this.patients.splice(1, person) }; //remove patient wiht 0 severity from the queue

      if (this.patients[person].retrive() >= highseverity.retrive()) {
        highseverity = this.patients[person]
      }
    }
    return highseverity;
  }
}

class ClassicQueue extends Queue {

  nextPatient() {
    if (this.patients.length <= 0) { return null }
    else {
      while (this.patients.length > 0) {
        for (let i = 0; i < this.patients.length; i++) {
          return this.patients[i]
        }
      }
    }
  }

}

class Hospital {
queues:Queue;
  constructor(queue:Queue){
    this.queues = queue;
  }

  add(ppatient:patient){
    this.queues.addPaitents(ppatient)
  }
 }