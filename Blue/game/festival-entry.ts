'use strict';

type FestivalGoer = {
  name: string,
  alcohol: number,
  guns: number
};

let queue: FestivalGoer[] = [
  { name: 'Amanda', alcohol: 10, guns: 1 },
  { name: 'Mark', alcohol: 0, guns: 0 },
  { name: 'Dolores', alcohol: 0, guns: 1 },
  { name: 'Wade', alcohol: 1, guns: 1 },
  { name: 'Anna', alcohol: 10, guns: 0 },
  { name: 'Rob', alcohol: 2, guns: 0 },
  { name: 'Joerg', alcohol: 20, guns: 0 }
];



// Create a securityCheck function that takes the queue as a parameter and returns a list of festivalgoers who can enter the festival

// If guns are found, remove them and put them on the watchlist (only the names)
// If alcohol is found confiscate it (set it to zero and add it to securityAlcholLoot) and let them enter the festival

function securityCheck(line) {
  let watchlist = [];
  let securityAlcoholLoot: number = 0;

  for (let person of line) {

    if (person.guns > 0) { person.guns = 0, watchlist.push(person.name) }

    if (person.alcohol > 0) { person.alcohol = 0, securityAlcoholLoot++ }
  }

  return {securityAlcoholLoot, watchlist}
}
console.log(securityCheck(queue));
console.log('------------------------');

console.log(queue)



//                                       CHEKIDEH AZ SOUAL
//  1-  method filter( )  vaghti estefadeh mishavd ke bishtar az yek element dar list ra mikhahid moghayese ya filter konid
//  2- sakhtan list jadid dar Object hamisheh komak mikonad ta hameye keys ya values  ha ra ba ham yek ja dashte bashid baraye compare kardan
//  3- mishavad bishtar az yek kar ra bad az sharte IF( )  azash bekhahid ta anjam dahad
//  4- say konid az alamate + dar console log estefadeh nakonid chon dar OBJECT khoroji ro undifund mikonad 
//  alamet && ra nemitavani dar har ja estefadeh koni ! faght dar IF agar lazem bod