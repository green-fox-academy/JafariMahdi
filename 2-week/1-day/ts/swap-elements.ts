// -  Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `abc`

let abc: string[]=['Arthur','Boe','Chole'];

let x=0;               // montion which index for swap
let y = 2;      // which index for swap

abc[x]= abc.splice(y,1,abc[x])[0];  // we use just splice for the swaping the index in array
// mystry is here   ˜˜˜ and  ˜˜˜˜˜  [0]  is really important for this method ????

console.log(abc);
