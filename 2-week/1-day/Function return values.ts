function makeGreen(name: string): string {
  let newName = 'Green ' + name;
  return newName;
}

let name = makeGreen('Tojas');
greetByName('Whazzup', name);