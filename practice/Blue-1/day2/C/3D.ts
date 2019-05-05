'use strict';

class Patient {
  severity: number;

  constructor() {
    this.severity = Math.floor(Math.random() * 9) + 1;
  }
  getSeverity() {
    return this.severity;
  }
  retriveSverity() {
    if (this.severity > 0) {
      this.severity--;
    } else {
      this.severity = 0;
    }
  }
}

abstract class Queue {
  patientsQueue: Patient[];

  addToQueue(patient: Patient) {
    this.patientsQueue.push(patient);
  }

  abstract nextPatient(): Patient;
}

class SafeQueue extends Queue {

  nextPatient() {
    let selectedPatient = null

    // the cleaning

    if (this.patientsQueue.length) {
      selectedPatient = this.patientsQueue[0]
    }

    for (let patient of this.patientsQueue) {
      if (patient.getSeverity() < selectedPatient.getSeverity()) {
        selectedPatient = patient
      }
    }
    return selectedPatient
  }
}
class ClasicQueue extends Queue {

  nextPatient(): Patient {
    let firstPatient = undefined;

    if (this.patientsQueue.length <= 0) { return null }
    else {
      for (let item of this.patientsQueue) {
        firstPatient = this.patientsQueue.shift();
        if (firstPatient.getSeverity() > 0) {
          this.patientsQueue.push(firstPatient)
        }
      }
    }
    return firstPatient;
  }
}

class Hospital {
  queue: Queue;

  constructor(queue: Queue) {
    this.queue = queue;
  }

  add(patient: Patient) {
    this.queue.addToQueue(patient)
  }
  nextpatient() {
    this.queue.nextPatient().retriveSverity();
  }
}