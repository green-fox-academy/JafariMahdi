import { Thing } from './thing';
import { Fleet } from './fleet';


/* Crete a fleet of things to have this output:
1. [ ] Get milk
2. [ ] Remove the obstacles
3. [x] Stand up
4. [x] Eat lunch
// Hint: You have to create a `print()` method as well */


let thing1 = new Thing('Get milk');
let thing2 = new Thing('Remove the obstacles');
let thing3 = new Thing('Stand up'); 
thing3.complete();
let thing4 = new Thing('Eat lunch');
thing4.complete();


// objectha ro sakhtim ba class aval hala ba class dovom kar mikonim class field
let fleet = new Fleet();

fleet.add(thing1);
fleet.add(thing2);
fleet.add(thing3);
fleet.add(thing4);

//console.log(fleet.Things);   // check elements in list of fleet class.
console.log(thing4.Name);      //  vaghti az methodi ke get darad va field private 
                              //ro neshan midahad estefadeh konid niyazi be prantes nadarid


fleet.print();        // method ro seda mikonim
