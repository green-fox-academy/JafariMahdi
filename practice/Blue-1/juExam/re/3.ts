' use srtrict';
class Patient {
  severity: number = Math.floor(Math.random() * 10) + 1;

  getSeverity() {
    return this.severity
  }
  treatPatient() {
    if (this.severity > 0) { this.severity-- }
  }
}

abstract class Queue {
  patientsQueue: Patient[] = [];

  add(patient: Patient) {
    this.patientsQueue.push(patient)
  }

  abstract nextPatient(): Patient;
}

class Hospital {
  queue: Queue;

  constructor(queue: Queue) {
    this.queue = queue;
  }

  addPatient(patient: Patient) {
    this.queue.add(patient)
  }
  
  threathNextPatient() {
    this.queue.nextPatient().treatPatient()
  }
}

class Safe extends Queue {

  nextPatient(): Patient {
    let highstSeverity = this.patientsQueue.reduce((a, b) => b.getSeverity() > a.getSeverity() ? b : a);
    return highstSeverity.getSeverity() <= 0 ? null : highstSeverity;
  }
}

class Classic extends Queue {

  nextPatient(): Patient {
    let readyToGo = [];
    this.patientsQueue.forEach((element) => { if (element.getSeverity() <= 0) { readyToGo.push(element) } })

    let resultPatient: Patient = null;

    while (resultPatient === null && this.patientsQueue.length > 0) {
      const firstInTheQueue = this.patientsQueue.shift();

      if (firstInTheQueue.getSeverity() > 0) {
        resultPatient = firstInTheQueue;
        this.patientsQueue.push(firstInTheQueue);
      }
    }

    return resultPatient;
  }
}
  // qoustion in this case let firstOne dar line 52 gerefte mishavad -> line 53 dicress mishavad -> va line 54 value daghighan kodam hastesh 52 or 53 ?
  // agar ma 53 ro dobareh seda konim dicrese mikonad va agar 52 ra seda konim shayad value ghabli rad dashte bashad ?


