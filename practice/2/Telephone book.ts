//We are going to represent our contacts in a map where the keys are going to be strings and 
//the values are going to be strings as well.

// Create a map with the following key-value pairs.
/*
Name (key)	Phone number (value)
William A. Lathan	405-709-1865
John K. Miller	402-247-8568
Hortensia E. Foster	606-481-6467
Amanda D. Newland	319-243-5613
Brooke P. Askew	307-687-2982 */

let telephoneBook = new Map();

telephoneBook.set('William A. Lathan', '405-709-1865');
telephoneBook.set('John K. Miller', '402-247-8568');
telephoneBook.set('Hortensia E. Foster', '606-481-6467');
telephoneBook.set('Amanda D. Newland', '319-243-5613');
telephoneBook.set('Brooke P. Askew', '307-687-2982');
console.log(telephoneBook.keys());

// Create an application which solves the following problems.
// What is John K. Miller's phone number?
console.log(telephoneBook.get("John K. Miller"));

// Whose phone number is 307-687-2982?


// Do we know Chris E. Myers' phone number?
telephoneBook.has('Chris E. Myers')?console.log('yes we know'):console.log('no we don\'t');

