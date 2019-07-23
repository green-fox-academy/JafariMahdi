'use strict';

let reversed: string = '.eslaf eb t\'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI';

function reversing(input: string): any {

    let newlist: string[] = input.split('');  //Convert normal String File   to =>   List String

    let newlist2 = newlist.reverse();    //  Reverse element inside our List String

    let newlist3 = newlist2.join('');   // Convert  String List  to => normal String File again

    return newlist3;
}
console.log(reversing(reversed));



