'use strict';

function factorio(input: number) {
    let result = 1;
    while (input > 1) {
        result *= input;
        input--;
    }
    return result;
}
console.log(factorio(3))


//     Secound Way


function factorio1(n: number) {

    if (n <= 0) {
        return 1;
    }
    else {
        return (n * factorio1(n - 1));
    }

}
console.log(factorio1(3)); 