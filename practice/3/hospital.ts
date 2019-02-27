
class Patient {
  diseesSeverity: number = Math.floor(Math.random() * 10) + 1;

  getSeverity() {
    return this.diseesSeverity;
  }

  treat() {
    this.diseesSeverity--;
  }
}

abstract class Queue {
  patients: Patient[]=[];

  add(input: Patient) {
    this.patients.push(input)
  }
  abstract nextPerson() // return the next patient
}
let peter= new Patient(); 
let anna = new Patient();
let jim = new Patient();

class Hospital{
queue:Queue;

constructor(inputQue:Queue ){
  this.queue= inputQue;
}
addPatient(add:Patient){
  this.queue.add(add)
}
treatNext(){
  this.queue.nextPerson().treat();
}
}

class SafeQueue extends Queue{
nextPerson(){
  let hights = 0;
  let indexMax =null;
this.patients.forEach((element,index) =>{
if(element.getSeverity() > hights){
  hights = element.getSeverity();
  indexMax = index;
}

})
return this.patients[indexMax];
  }

}
let safe1 = new SafeQueue();
safe1.add(peter);
safe1.add(anna);
safe1.add(jim);
console.log(safe1);

console.log(safe1.nextPerson());

