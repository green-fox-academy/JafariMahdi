let map2 = new Map();
map2.set('978-1-60309-452-8', 'A Letter to Jo');
map2.set('978-1-60309-459-7', 'Lupus');
map2.set('978-1-60309-444-3', 'Red Panda and Moon Bear');
map2.set('978-1-60309-461-0', 'The Lab');
console.log(map2);

// Print all the key-value pairs in the following format
map2.forEach(function (key, value) {
  console.log(`${key}(ISBN:${value})`);
})
//Remove the key-value pair with key 978-1-60309-444-3
map2.delete('978-1-60309-444-3');
console.log(map2);

//Remove the key-value pair with value The Lab

//Add the following key-value pairs to the map
map2.set('978-1-60309-450-4','They Called Us Enemy');
map2.set('978-1-60309-453-5','Why Did We Trust Him?');
console.log(map2);


//Print whether there is an associated value with key 478-0-61159-424-8 or not
console.log(map2.has('478-0-61159-424-8'));

// Print the value associated with key 978-1-60309-453-5

console.log(map2.get('978-1-60309-453-5'));
