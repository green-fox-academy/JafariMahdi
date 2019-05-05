'use strict';

class patient {
  severity: number;

  constructor() {
    this.severity = Math.floor(Math.random() * 10 - 1) + 1;
  }
  getSeverity() {
    return this.severity
  }
  treatPatient() {
    if (this.severity > 0) {
      this.severity--
    }
    else { this.severity = 0; }
  }
}
abstract class Queue {
  patients: patient[] = [];

  addPatient(patient: patient) {
    this.patients.push(patient)
  }
  abstract nextPatient(): patient;
}

class Hospital {
  queue: Queue;

  constructor(queue: Queue) { }

  add(patient: patient) {
    this.queue.addPatient(patient);
  }

  treatTheNextOne() {
    this.queue.nextPatient().treatPatient();
  }
}

class Safe extends Queue {

  nextPatient(): patient {
    let highstSeverity: patient;
    for (let element of this.patients) {
      if (this.patients.length <= 0 || element.getSeverity() <= 0) { return null }
      else if (element.getSeverity() > highstSeverity.getSeverity()) {
        highstSeverity = element
      }
    }
    return highstSeverity;
  }
}

class Classic extends Queue {

  nextPatient(): patient {
    let nextOne: patient;
    let perviosPerson: patient;
    let readyToGo = [];

    for (let element of this.patients) {
      if (this.patients.length <= 0) { return null }
      if (element.getSeverity() <= 0) { readyToGo.push(element) }

      nextOne = this.patients.shift()
      if (nextOne.getSeverity() > 0) {
        this.patients.push(nextOne)
        perviosPerson = nextOne
      } else {
        readyToGo.push(nextOne)
        perviosPerson = nextOne
      }
    }
    return nextOne;
  }
}

