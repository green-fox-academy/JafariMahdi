'use strict';

let words: string[] = ['What', 'I', 'do', 'create,', 'I', 'cannot', 'not', 'understand.'];
// Expected output: "What I cannot create I do not understand."

function swapping(list: string[]) {
    return list.map(value => {
        if (value === 'do') { return 'cannot' }
        if (value === 'cannot') { return 'do' }
        else { return value }
    }).join(' ');
}
console.log(swapping(words));
