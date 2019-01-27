// -  Create a function called `factorio`
//    that returns it's input's factorial


function factorio(a: number): number{
    let result = 1 
    for (let i = 1; i <= a ; i++){
        console.log(result, i);
        
            result *= i;
            }
    return result;
}
console.log(factorio(4));
