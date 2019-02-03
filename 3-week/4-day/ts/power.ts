'use strict';

import { isMainThread } from "worker_threads";

// Given base and n that are both 1 or more, compute recursively (no loops)
// the value of base to the n power, so powerN(3, 2) is 9 (3 squared).

function powerIt(baseNumber, power) {
    if (power <= 1) {
        return baseNumber;
    } else {
        return baseNumber * powerIt(baseNumber, power - 1)

    }
}
console.log(powerIt(2, 9));