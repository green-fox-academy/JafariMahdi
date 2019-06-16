'use strict';

let text = "apple";
let textsToCheck = ["apple", "apply", "tuple", "alter"];
//  out = ["apple", "apply", "tuple"]

let text2 = "monkey"
let textsToCheck2 = ["donkey", "monday", "shaker"]
//  out  ["donkey", "monday"]

function chekcer(word, list) {
  let newlist = [];
  let count = 0;

  list.forEach(item => {
    if (item.length === word.length) {
      for (let i = 0; i < word.length; i++) {
        if (word[i] !== item[i]) {
          count++
        }
      }
      if (count <= 3) { newlist.push(item) }
    }
  });
  return newlist

}
console.log(chekcer(text, textsToCheck));
console.log(chekcer(text2, textsToCheck2));

