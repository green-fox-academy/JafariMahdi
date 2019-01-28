
// -  Create an array variable named `animals`
//    with the following content: `["koal", "pand", "zebr"]`
// -  Add all elements an `"a"` at the end

/*
let list: any[]=['koal','pand','zebr'];

list.forEach(element => {               not working at all
    element.push('a');
});
console.log(list);
*/



let animals: string[] = ['koal', 'pand', 'zebr'];

for(let i: number = 0; i<animals.length; i++)
{
  animals[i] += 'a';            // just simple loop for each item
}

console.log(animals);