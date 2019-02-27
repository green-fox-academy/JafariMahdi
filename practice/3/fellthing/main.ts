
    
import { Thing } from './thing';
import { Fleet } from './feel';

let fleet = new Fleet();
let thing1 = new Thing('Get milk');
let thing2 = new Thing('Remove the obstract');
let thing3 = new Thing('Stand up ');
let thing4 = new Thing('Eat lanch');

thing1.complete();
console.log(thing1.getCompleted());
console.log(thing3.getCompleted());

//-------------------------
fleet.add(thing1);
fleet.add(thing2);
fleet.add(thing3);
fleet.add(thing4);
console.log(fleet.getThings());


fleet.getThings().forEach(element =>{ 
  if(element.getCompleted()){console.log(`[x]`,element);
  }else { console.log(`[ ]`,element)}
  
})
  





/* Crete a fleet of things to have this output:
1. [ ] Get milk
2. [ ] Remove the obstacles
3. [x] Stand up
4. [x] Eat lunch
// Hint: You have to create a `print()` method as well */