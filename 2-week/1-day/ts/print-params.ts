

// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)



function printParams(...input: any[]) {   // ...  Means unlimited argument for list and its important here 


  console.log(input.join());      // join usfull method for the Array

}
printParams(223, 54, false, 'anything');

