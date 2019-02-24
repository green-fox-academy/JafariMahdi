import { Plane,F16,F35} from './aircraft';

class Carrier {

 carier :Carrier[] =[];
 storeAmmo: number[];
 healthpoint;

 constructor(initalAmmo,healthpoint){
   this.storeAmmo = initalAmmo;
   this.healthpoint = healthpoint;

 }

 add(newaircraft: Carrier){
this.carier.push(newaircraft);
 }


}


const plane1 = new Plane()