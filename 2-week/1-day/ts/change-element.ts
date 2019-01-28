// -  Create an array named `numList` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 with the `.map` method 
// -  Print the fourth element as a test


let numlist: number[]= [1,2,3,8,5,6];

let newnum = numlist.map(function(item){            // just make new varible for use the function
    numlist[3] =4;                          // change what you want from the list
    return item;            // return becuse we can use the new varible and have log or print for it
})

console.log(numlist);       // but whay the old list also changed becouse we give it to the new list ????

console.log(newnum);                // log it

