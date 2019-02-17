// -  Create variable named `name` and assign the value `Greenfox` to it
// -  Create a function called `greet` that greets it's input parameter
//     -  Greeting is printing e.g. `Greetings, dear Greenfox`
//     -  Prepare for the special case when no parameters are given
// -  Greet `name`


var nameToGreet : string = 'GreenFox';


function greet(a : string): string{
    let b = 'Greetings ';
    if(a ==''){
        b = 'please input your name';
    }else {
        b += a;
    }
    return b;

}
let c = greet(nameToGreet);
console.log(c);
