'use strict';

let abc: string[] = ['Arthur', 'Boe', 'Chole'];

[abc[0], abc[2]] = [abc[2], abc[0]];
console.log(abc);
