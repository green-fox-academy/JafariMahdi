// -  Create a variable named `numList` with the following content: `[1, 2, 3, 4, 5]`
// -  Increment the third element simply by accessing it
// -  Log the third element to the console



let numList: number[]=[1,2,3,4,5];


let newList = numList.map(function(item){

    numList[2] = 4;     // just give the new value for it
    return item;

})
 console.log(newList);
