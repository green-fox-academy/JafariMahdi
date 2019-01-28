// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

function divide(x){
    let result = x / 10 ;
    if( x === 0){
        return ('fail');
    } else {
        return (result);
    }
}
console.log(divide(20));