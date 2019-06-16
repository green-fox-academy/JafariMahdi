interface Reservationy {
  getDownBooking(): void;
  getCodeBooking(): void;
}


class Reservations implements Reservationy {

  daysOfWeek: string[] = ['Mon', 'TUE', 'WED', 'THR', 'FRI', 'SAT', 'SUN'];

  getDownBooking() {
    return this.daysOfWeek[Math.floor(Math.random() * this.daysOfWeek.length)]
  }
  getCodeBooking() {
    let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'Y', 'W']
    let result = '';
    for (let i = 0; i < 8; i++) {
      let singelRandoomNumber = Math.floor(Math.random() * list.length)
      result += list[singelRandoomNumber];
    }
    return result

    // rahe dovom 
    // return Math.random().toString(36).replace('0', '').substring(0, 8).toUpperCase();
  }

  reservition() {
    console.log(`Booking# ${this.getCodeBooking()} for ${this.getDownBooking()}`);
  }
}
//  vaghti ke shoma yek file Interface ra implement mikonid dar klass hengam field dadan bayad mesl yek interface  field ra besazid

let reserv = new Reservations()
for (let i = 0; i < 8; i++) {
  reserv.reservition();
}

// key word 
// interface ra mitavan dar kellss and va har afunction niz estafadeh kard va age feild ya method  dashte bashid 
// bayad az an estefadeh konid hatmen  =>> readOnly ham moham hast 

// sakhtan field dar kelass implements shode niz fatgh mikonad  va  ba colon faght sakhte mishavad 

// random az list dar do marhale anjam mishavad varible dadeh va random ba list.length midahim  dar varible dige sakhte va value ra list[varibleAval] gharar midahim

