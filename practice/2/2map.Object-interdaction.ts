// Create a map where the keys are strings and the values are strings with the following initial values

let secound ={
  '978-1-60309-452-8':'A Letter to Jo',
  '978-1-60309-459-7': 'Lupus',
  '978-1-60309-444-3': 'Red Panda and Moon Bear',
  '978-1-60309-461-0': 'The Lab'
};

//Print all the key-value pairs in the following format
for(let i in secound){
  console.log(secound[i],`(ISBN: ${i})`);
  
}

//Remove the key-value pair with key 978-1-60309-444-3
delete secound["978-1-60309-444-3"];
console.log(secound);

//Remove the key-value pair with value The Lab

//Add the following key-value pairs to the map
secound ['978-1-60309-450-4']='They Called Us Enemy';
secound ['978-1-60309-453-5']= 'Why Did We Trust Him?';
console.log(secound);

//Print whether there is an associated value with key 478-0-61159-424-8 or not
console.log(secound.hasOwnProperty('478-0-61159-424-8')? 'yes it has':'noooooo');

// Print the value associated with key 978-1-60309-453-5
console.log(secound['978-1-60309-453-5']);




