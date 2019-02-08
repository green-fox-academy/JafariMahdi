export {}
let number = [1, 2, 3, 4];
let sum =0;
const resultForEach = number.forEach(function (oneNumber) {
    sum +=oneNumber;
    
   // console.log(oneNumber * 2);

    // No return
    return oneNumber * 2;
})                                  // Diffrent between ForEach[] and Map[] loop 

console.log(resultForEach,sum);
console.log('-----------------');

let sum1 = number.map(function (oneNumber) {
    //const money = oneNumber * 2

    //console.log(oneNumber * 2);

    //return money;
    return   oneNumber +=12  ;


})
console.log(sum1);


