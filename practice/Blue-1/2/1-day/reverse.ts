
let numlist = [3, 4, 5, 6, 7];

//let newnumlist = numlist.reverse();
//console.log(newnumlist);

// rahe dovom

let list2 = [];
for (let i = 0; i < numlist.length; i++) {
  list2[i] = numlist[numlist.length - i - 1];  // estefadeh kardan az loop baray revese kardan array
}

console.log(list2);