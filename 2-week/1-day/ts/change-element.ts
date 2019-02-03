// -  Create an array named `numList` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 with the `.map` method 
// -  Print the fourth element as a test


let numlist: number[]= [1,2,3,8,5,6];

let newlist = numlist.map(function(value){            // just make new varible for use the function
    if (value === 8){
             value = 4;
         }  
    return value;                       
})
                                       // return becuse we can use the new varible and have log or print for it

console.log(newlist);                  

