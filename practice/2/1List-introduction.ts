/*
We are going to play with lists. Feel free to use the built-in methods where possible.

Create an empty list which will contain names (strings)
Print out the number of elements in the list
Add William to the list
Print out whether the list is empty or not
Add John to the list
Add Amanda to the list
Print out the number of elements in the list
Print out the 3rd element
Iterate through the list and print out each name
William
John
Amanda
Iterate through the list and print
1. William
2. John
3. Amanda
Remove the 2nd element
Iterate through the list in a reversed order and print out each name
Amanda
William
Remove all elements  */
let empety: string[] = [];
console.log(empety);
empety.push('wiliam');
console.log(empety);
empety.push('jhon', 'amanda');
console.log(empety[2]);
console.log('-----------------');
console.log(empety[1]);
console.log(empety.length);
console.log('--------------');


empety.forEach(value =>{
  console.log(value)
})

for(let i = 0; i < empety.length; i++){
  console.log([i+1]+': '+empety[i] );
  
}
console.log('-----------------');

empety.splice(1,1);
console.log(empety);
empety.splice(0,2)
console.log(empety);





