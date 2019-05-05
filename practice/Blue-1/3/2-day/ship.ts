import {Pirat} from './pirat'
class Ship{
  pirats:Pirat[]=[];
  capitan:Pirat;


  fillship(){
    let fill = Math.floor(Math.random()* 12)
    this.pirats.push(fill)
  }




}