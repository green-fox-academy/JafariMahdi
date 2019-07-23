'use strict';

const watchlist: string[] = [];

let securityAlcoholLoot: number = 0;

const queue: any[] = [
  { name: 'Amanda', alcohol: 10, guns: 1 },
  { name: 'Mark', alcohol: 0, guns: 0 },
  { name: 'Dolores', alcohol: 0, guns: 1 },
  { name: 'Wade', alcohol: 1, guns: 1 },
  { name: 'Anna', alcohol: 10, guns: 0 },
  { name: 'Rob', alcohol: 2, guns: 0 },
  { name: 'Joerg', alcohol: 20, guns: 0 }
];

function securityCheck(list: any[]) {
  return list.map(value => {   // return is really important in this line <==
    if (value.guns > 0) {
      watchlist.push(value.name);
      return {};
    }
    else if (value.alcohol > 0) {
      securityAlcoholLoot += value.alcohol;
      value.alcohol = 0;
      return value;
    } else {
      return value;
    }
  });
}
console.log(securityCheck(queue)); 
