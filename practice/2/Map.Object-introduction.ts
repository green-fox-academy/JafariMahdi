/*
Map introduction 1
We are going to play with maps. Feel free to use the built-in methods where possible.

Create an empty map where the keys are integers and the values are characters

Print out whether the map is empty or not

Add the following key-value pairs to the map

Key	Value
97	a
98	b
99	c
65	A
66	B
67	C
Print all the keys

Print all the values

Add value D with the key 68

Print how many key-value pairs are in the map

Print the value that is associated with key 99

Remove the key-value pair where with key 97

Print whether there is an associated value with key 100 or not

Remove all the key-value pairs  */

//Add the following key-value pairs to the map

let map = {}
map['97'] = 'a';
map['98'] = 'b';
map['99'] = 'c';
map['65'] = 'A';
map['66'] = 'B';
map['67'] = 'C';
console.log(map);
console.log('-----------------------');

//Add value D with the key 68
map['68'] = 'D';

// Print how many key-value pairs are in the map
let valuelength = Object.values(map);
let keylength = Object.keys(map);
console.log(keylength);
console.log(valuelength);
console.log(keylength.length)
console.log('----------------------------');

// Remove the key-value pair where with key 97
delete map['97'];
console.log(map);

// Print whether there is an associated value with key 100 or not
//  for checkimg  in the list we have this elemnt or no
console.log(keylength.includes('100')? 'yes it have' : "no it dosn't have it");

//Remove all the key-value pairs
