'use strict';

let shopItems: any[] = ['Cupcake', 2, 'Brownie', false];

function sweets(input: any[]) {
    let newlist = input.map(value => {
        if (value === 2) {
            return 'Croissant';
        } if (value === false) {
            return 'Ice cream';
        } else {
            return value;
        }
    })
    return newlist;
}
console.log(sweets(shopItems));