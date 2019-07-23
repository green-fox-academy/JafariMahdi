'use strict ';

function bubble(input: number[]) {
  input.sort(function (a, b) {
    return a - b;
  })
  return input;
}
//  Example:
console.log(bubble([34, 12, 24, 9, 5]));
//  should print [5, 9, 12, 24, 34]

// Secound One

function advancedBubble(list: number[], condition: boolean) {
  if (!condition) {
    list.sort(function (a, b) {
      return a - b;
    })
  } else {
    list.sort(function (a, b) {
      return b - a;
    })
  }
  return list;

}

console.log(advancedBubble([34, 12, 24, 9, 5], true));
//  should print [34, 24, 12, 9, 5]