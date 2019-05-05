let list = [1, 3, 4, 7, 'e', 9, 6, 5, 4, 3, 3];
function printparameters(...input) {
  input.forEach(element => {
    console.log(element);
  })
}

printparameters(list);


