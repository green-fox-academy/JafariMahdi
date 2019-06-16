'use strict';

class Patient {
  severity: number;

  constructor() {
    this.severity = Math.floor(Math.random() * 9) + 1;
  }

  retirveSeverity() {
    return this.severity;
  }
  treatPatient() {
    if (this.severity === 0) {
      this.severity = 0
    } else {
      this.severity--
    }
  }
}

abstract class Queue {
  patients: Patient[];

  addPatient(add: Patient) {
    this.patients.push(add)
  }
  abstract getNextPatient(): void;
}

class Hospital {
  queue: Queue;

  constructor(queue: Queue) {
    this.queue = queue;
  }

  addToQueeu(patient: Patient) {
    this.queue.addPatient(patient)
  }
  hospitalNextPatient() {
    this.queue.getNextPatient();
  }
}

class SafeQueue extends Queue {

  getNextPatient() {
    let highstSeverity = 0;
    let lineHighSeverity = [];
    let readyToGo = [];

    for (let item of this.patients) {
      if (this.patients.length <= 0) { return null }
      if (item.retirveSeverity() <= 0) { readyToGo.push(item) }
      else if (item.retirveSeverity() > highstSeverity) { highstSeverity = item.retirveSeverity(), lineHighSeverity.unshift(item) }
    }
    return highstSeverity;
  }
}

class ClassicQueue extends Queue {

  getNextPatient(): Patient {
    let resultPatient: null;

    while (resultPatient === null && this.patients.length > 0) {
      const firstInTheQueue = this.patients.shift();
      if (firstInTheQueue.retirveSeverity() > 0) {
        resultPatient = firstInTheQueue;
        this.patients.push(firstInTheQueue);
      }
    }
  }
}