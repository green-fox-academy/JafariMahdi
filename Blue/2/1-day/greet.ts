
// -  Create variable named `nameToGreet` and assign the value `Greenfox` to it
// -  Create a function called `greet` that greets it's input parameter
//     -  Greeting is printing e.g. `Greetings, dear Greenfox`
//     -  Prepare for the special case when no parameters are given
// -  Greet `nameToGreet`


let nameToGreet = 'Greenfox';

function greet(input?) {
  if (input === undefined) {
    return 'Greeting ' + nameToGreet;
  } else {
    return 'Greetings, dear ' + input;
  }
}
console.log(greet('mahdi'));
