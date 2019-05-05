'use strict';

//  Create a function that takes a string and a list of string as a parameter
//  Returns the index of the string in the list where the first string is part of
//  Only need to find the first occurence and return the index of that
//  Returns `-1` if the string is not part any of the strings in the list

function substrlist(word: string, list: string[]) {
  let find;
  find = (list.filter(item => {
    if (item.indexOf(word) !== -1) { return word }
  })[0])

  /*
      // simple way
    for (let element of list) {
      if (element.includes(word)) { find = element }
    }
  */
  return (list.indexOf(find))

}

//  Example
console.log(substrlist('ching', ['this', 'is', 'what', 'I\'m', 'searching', 'in']));
//  should print: `4`
console.log(substrlist('not', ['this', 'is', 'what', 'I\'m', 'searching', 'in']));
//  should print: `-1`

  //                                key words 

// 1- agar mikhahid varibli ra return konid badan , an ra biron az shart dorost konid ta besahavd return  kard badan  be rahati
// 2-  filter dar inja be dakhele tak tak itemha rafte va check mikoneh char ha ro  dar vagheh mesle ForEach ya Map LOOP kar mikonad FILTER
// 3- indexOf( ) -1   yeki az rahaye check kardan dar array baray peyda kardan  YEK kalame ya charecteri ke mikhahim hast 