// Create an empty map where the keys are integers and the values are characters

let mymap = new Map();
//Print out whether the map is empty or not
console.log(mymap);

//Add the following key-value pairs to the map

mymap.set('97','a');
mymap.set('98','b');
mymap.set('99','c');
mymap.set('65','A');
mymap.set('66','B');
mymap.set('67','C');
console.log(mymap);

//Print all the keys
console.log(mymap.values());
console.log(mymap.keys());
console.log(mymap.entries());
// Add value D with the key 68
mymap.set('68','D');
//Print how many key-value pairs are in the map
console.log(mymap.size);

//Print the value that is associated with key 99
console.log(mymap.get('99'));
//Remove the key-value pair where with key 97
console.log(mymap.get('97'));

//Print whether there is an associated value with key 100 or not
console.log(mymap.get('100'));

//Remove all the key-value pairs
mymap.clear();
console.log(mymap);

