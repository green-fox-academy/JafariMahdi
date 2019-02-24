// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

let reversed: string = '.eslaf eb t\'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI';

function reverse(file) {
  let list = file.split('');
  console.log(list);
  let list2 = list.reverse();
  console.log(list2);
  let list3 = list2.join('');
  console.log(list3);
}
console.log(reverse(reversed));