'use strict';

function substrlist(value: string, list: string[]) {
  let foundString: string = '';
  foundString = (list.filter(str => {
    if (str.indexOf(value) !== -1) {
      return value;
    }
  })[0]);
  return (list.indexOf(foundString));

}

//substrlist('ching', ['this', 'is', 'what', 'I\'m', 'searching', 'in']);
//  Example
console.log(substrlist('ching', ['this', 'is', 'what', 'I\'m', 'searching', 'in']));
//  should print: `4`
console.log(substrlist('not', ['this', 'is', 'what', 'I\'m', 'searching', 'in']));
//  should print: `-1`