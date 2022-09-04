    'use strict';

import { Thing } from './thing';
import { Fleet } from "./fleet";

// You have the Thing class
// You have the Fleet class
// You have the FleetOfThings class with a Main method
// Download those, use those
// In the Main method create a fleet
// Achieve this output:s

let fleet = new Fleet();


const thing1 = new Thing('Get milk');
const thing2 = new Thing('Remove the obtacles');
const thing3 = new Thing('Stand up');
thing3.complete();
const thing4 = new Thing('Eat lunch');
thing4.complete();


fleet.add(thing1);
fleet.add(thing2);
fleet.add(thing3);
fleet.add(thing4);


fleet.print();

/* Crete a fleet of things to have this output:

// 1. [ ] Get milk
// 2. [ ] Remove the obstacles
// 3. [x] Stand up
// 4. [x] Eat lunch

// Hint: You have to create a `print()` method as well */
