
/* object 
in general we dont have just * key: value *

*/
const person = {
    name: '',
    age: '',                  // => Object
    gender: '',
    walk: function () { },  // =>  make clearlly  this is function
    talk: function () { }

};
// how  to use * . *
const a = {
    b: {                    // object key is way to call them
        c: {
            d: {
                e: {
                    say:'szia it vagyok' 
                }
            }
        }
    }
}
console.log(a.b.c.d.e);  //      <======


// ==>  Reduce  is Array Method 

const myArry = [1, 2, 3];
myArry.reduce(function (x, y) {

    x += y;
})

// Read file or .txt from other file

/*const fs = require(' fs');
const fileContent = fs.readFileSync('./questions.txt', 'utf-8');  // call file from other page ˆ^?
console.log(fileContent);
*/
// abstract and interface

interface walk {
    walk();
}

abstract class Animal {
    abstract eat();

}

class Duck extends Animal implements walk { // implement just usfull for the local class not for the export{}
    walk() { }
    eat() { }
}

// map and foreach

const number = [1, 2, 3, 4];
const resultForEach = number.forEach(function (oneNumber) {

    console.log(oneNumber * 2);

    // No return => undifind
    return oneNumber * 2;
})

console.log(resultForEach);
console.log('-----------------');

const resultMap = number.map(function (oneNumber) {
    const money = oneNumber * 2

    console.log(oneNumber * 2);

    //return money;
    return money;


})
console.log(resultMap);


