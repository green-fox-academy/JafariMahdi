// -  Create a variable named `numList` with the following content: `[1, 2, 3, 4, 5]`
// -  Increment the third element simply by accessing it
// -  Log the third element to the console



let numList: number[]=[1,2,3,4,5];


let newList = numList.map(function(item){
//  numList[2] += 4; in this case if you put += some number  => is going to power by 2 that number + pervios number ????
    numList[2] = 4;     // just give the new value for it
    return item;

})
 console.log(newList);
