//Create a list ('List A') which contains the following values
// Apple, Avocado, Blueberries, Durian, Lychee
//Create a new list ('List B') with the values of List A

let A = ['Apple', 'Avocado', 'Blueberries', 'Durian', 'Lychee'];
let B = ['Apple', 'Avocado', 'Blueberries', 'Durian', 'Lychee'];

console.log(A);
console.log(B);
console.log('------------------');

//Remove Durian from List B
B.splice(3, 1);
console.log(A);
console.log(B);
console.log('--------------------------');

// Add Kiwifruit to List A after the 4th element

A.splice(4, 0, 'Kiwifruit');
console.log(A);
console.log(B);
//Compare the size of List A and List B
console.log(A.length);  //6
console.log(B.length);  // 4

console.log('-------------------');
// Get the index of Avocado from List A
console.log(A.indexOf('Avocado'));

//Get the index of Durian from List B
console.log(B.indexOf('Durian'));
console.log('--------------');

// Add Passion Fruit and Pummelo to List B in a single statement
B.push('Passion Fruit','Pummelo');
console.log(B);

//Print out the 3rd element from List A

console.log(A[3]);



