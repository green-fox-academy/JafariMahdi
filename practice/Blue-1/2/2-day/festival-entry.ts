'use strict';

const watchlist: string[] = [];

let securityAlcoholLoot: number = 0;

type FestivalGoer = {
  name: string,
  alcohol: number,
  guns: number
};

const queue: FestivalGoer[] = [
  { name: 'Amanda', alcohol: 10, guns: 1 },
  { name: 'Mark', alcohol: 0, guns: 0 },
  { name: 'Dolores', alcohol: 0, guns: 1 },
  { name: 'Wade', alcohol: 1, guns: 1 },
  { name: 'Anna', alcohol: 10, guns: 0 },
  { name: 'Rob', alcohol: 2, guns: 0 },
  { name: 'Joerg', alcohol: 20, guns: 0 }
];

// Queue of festivalgoers at entry
// no. of alcohol units
// no. of guns

// Create a securityCheck function that takes the queue as a parameter and returns a list of festivalgoers who can enter the festival

// If guns are found, remove them and put them on the watchlist (only the names)
// If alcohol is found confiscate it (set it to zero and add it to securityAlcholLoot) and let them enter the festival

function securityCheck(list) {
  let newqueue = [];

  for (let people of list) {
    if (people.guns !== 0) { watchlist.push(people.name) }

    newqueue = queue.filter(value => value.guns === 0); // filter our list and delet the items with the gun

    if (people.alcohol > 0) { people.alcohol = 0, securityAlcoholLoot++ }
  }
  return [
    'this is watch list :', watchlist,
    'who can enter :', newqueue]
}
console.log(securityCheck(queue))

//                                       CHEKIDEH AZ SOUAL
//  1-  method filter( )  vaghti estefadeh mishavd ke bishtar az yek element ra mikhahid moghayese ya filter konid
//  2- sakhtan list jadid dar Object hamisheh komak mikonad ta hameye keys ya values  ha ra ba ham yek ja dashte bashid baraye compare kardan
//  3- mishavad bishtar az yek kar ra bad az sharte IF( )  azash bekhahid ta anjam dahad
//  4- say konid az alamate + dar console log estefadeh nakonid chon dar OBJECT khoroji ro undifund mikonad 
