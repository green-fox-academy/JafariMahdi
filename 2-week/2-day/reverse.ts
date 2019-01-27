'use strict';
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

let reversed: string = '.eslaf eb t\'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI';
//console.log(reverse(reversed));

//export = reverse;

function rev(a : string){
    let b : string[] = a.split('');     //number 1 :  we use the split for making  our text sepret like array. 
    let c : string [] = b.reverse();     //number 2 : use the reverse to make text  or our array from the end to firest contray.  'bar aks kardan'
    let d: string = c.join(''); // use the join for the make them togehter again, important part you have to use ('') in the end becouse that's also 
                                // delete the space or come between the index or charcter we have


    return(d);
 }
 console.log(rev(reversed));
 