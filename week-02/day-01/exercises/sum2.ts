// -  Write a function called `sum` that sum all the numbers until the given parameter
// -  The function should return the result

let list : number[]= [12,3,5,6,8,9];

function sum2(list:number[], until: number){
   let result: number = 0;
   for(let i =0;i < until; i++){
    result += list[i];
   }

   return result;
}
console.log(sum2(list,3)); // we calld directly the function with two parameters in console

let j = sum2(list,3);  // give varible to function and call that varible to console
console.log(j);


// you can call 'until' also and give that som value ˆ