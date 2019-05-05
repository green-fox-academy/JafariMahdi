import { DiceSet } from "./DiceSet";

/*
You have a DiceSet class which has a list for 6 dices
You can roll all of them with roll()
Check the current rolled numbers with getCurrent()
You can reroll with reroll()
Your task is to roll the dices until all of the dices are 6 */


let mydice = new DiceSet();
 console.log(mydice.roll());

let i = 0;
while (i < 6) {
  if (mydice.getCurrent(i) === 6) {
    i++
  } else {
    mydice.reroll(i)
  }
}
console.log(mydice.dice);
