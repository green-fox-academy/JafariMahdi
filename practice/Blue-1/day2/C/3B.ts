'uses strict';

class Patient {
  severity: number;

  constructor() {
    this.severity = Math.floor(Math.random() * 10) + 1;
  }
  retrive() {
    return this.severity;
  }
  treat(): void {
    this.severity--;
  }
}
//----------------------------------------
abstract class Queue {
  patients: Patient[];

  addPatient(add: Patient) {
    this.patients.push(add)
  }

  abstract nextPatient(): void;
}
//-----------------------------
class Hospital {
  queues: Queue;

  constructor(queues: Queue) {
    this.queues = queues;
  }

  addQueue(patient: Patient) {
    this.queues.addPatient(patient)
  }

  hospitalNextPatient() {
    this.queues.nextPatient().treat();
  }
}
// --------------------------------
class SafeQueue extends Queue {

  nextPatient(): Patient {
    let resultPatient: Patient = null;

    this.patients.forEach(element => {
      const severity = element.retrive();

      if ((resultPatient === null && severity > 0) || (resultPatient !== null && severity > resultPatient.retrive())) {
        resultPatient = element
      }
    })
    return resultPatient;
  }
}
// --------------------------------

class ClassicQueue extends Queue {
  nextPatient(): Patient {
    let resultPatient = null;

    while (resultPatient === null && this.patients.length > 0) {
      const firstInTheQueue = this.patients.shift();

      if (firstInTheQueue.retrive() > 0) {
        resultPatient = firstInTheQueue;
        this.patients.push(firstInTheQueue)
      }
    }
    return resultPatient;
  }
}

