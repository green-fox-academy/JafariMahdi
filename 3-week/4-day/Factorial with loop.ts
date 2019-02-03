function factorialIterative(num: number): number{
  let fact = 1;
  for(var i = 0; i < num; i += 1){
    fact *= i + 1;
  }
  return fact;
}

console.log('5! is', factorialIterative(5))