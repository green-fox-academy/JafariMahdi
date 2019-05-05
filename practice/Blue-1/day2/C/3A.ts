'use strict';

class Patient {
  severity: number;

  constructor() {
    this.severity = Math.floor(Math.random() * 10) + 1;
  }
  retrive() {
    return this.severity
  }

  treat() {
    this.severity--;
  }
}
//-------------------------------------------
abstract class Queue {
  patients: Patient[] = [];

  add(pat: Patient) {
    this.patients.push(pat)
  }

  abstract nextPerson(): void;
}
//----------------------------------------
class Hospital {
  queue: Queue;

  constructor(queue: Queue) {
    this.queue = queue;
  }

  hospitalAdd(patient1: Patient) {
    this.queue.add(patient1)
  }

  hospitalnextperson() {
    this.queue.nextPerson().treat()
  }
}
//------------------------------

class SafeQueue extends Queue {

  this.patients.forEach(element => {
    
  });

}
