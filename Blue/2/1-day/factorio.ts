// -  Create a function called `factorio`
//    that returns it's input's factorial

function factorial(input: number) {
  let fact = 0;
  if (input === 0) {
    fact = 1
  }
  else {
    for (let i = 0; i < 4; i++) {
      fact = input * (factorial(input - 1));
    }
  }
  return fact
};


