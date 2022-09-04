'use strict';

function printParams(...input: any[]) {   // ...  Means unlimited argument for list and its important here 


  console.log(input.join());      // join usfull method for the Array

}
printParams(223, 54, false, 'anything');

