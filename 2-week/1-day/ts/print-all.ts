
// -  Create a variable named `integers` with the following content: `[4, 5, 6, 7]`
// -  Log each the element of `integers` to the console*
// *hint: use a loop, console.log(integers) won't cut it
// -  bonus for using the correct built in array method


let integers: number[] = [4, 5, 6, 7];

integers.forEach(function (i) {
    console.log(i);
});8 

/*for (let i = 0; i < integers.length; i++) {  
    i -= 1 ;                                        //  infinite loop, never gonna stop this loop
    console.log(integers[i]);

}  */        