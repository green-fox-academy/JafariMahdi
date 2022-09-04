'use strict';

function sum(x) {
  if (x < 10) {
    return x % 10;
  } else {

    return (x % 10) + sum(Math.floor(x / 10))

  }

}


console.log(sum(45));