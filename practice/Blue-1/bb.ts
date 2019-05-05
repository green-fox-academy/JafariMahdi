'use strict';

function add(num, val) {
  num += val;
  //return num
}

function main() {
  let u = 1;
  return add(u, 2)

}
//console.log(main())

// ------------------------------------- important diffrnet memory for the saving

function add2(arr, val) {
  arr.push(val)
}

function main2() {
  let a = [];

  add2(a, 2)
  return a
}
//console.log(main2())
//console.log('--------------------');

// varible  can save in the memory in two way 1- STACK => be usefull for the single value like string or number and memeory will be  locall
// number2- HEAP  => be usefull for the arrays and objects , more than one value and that save in the large memeory and global 
// in the 'HEAP' if you change some thing in the other function thats be change also other place but for the 'STACK' just change localy  

