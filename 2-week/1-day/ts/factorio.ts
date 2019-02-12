// -  Create a function called `factorio`
//    that returns it's input's factorial


function factorio(a) {
    let result = 0;
    for (let i = 1; i < a; i++) {
        for (let b = 0; b < a - 1; b++) {
            
            result += a;
        }
    }
    return result;
}
console.log(factorio(4));
