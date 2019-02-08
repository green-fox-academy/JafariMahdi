import { morning } from './file'


let test = require('tape');

test('Add two numbers together ', t => {
    let actual = morning(3, 4);
    let expected: number = 7;

    t.equal(actual, expected);
    t.notEqual(actual, 50, 'this shoud not equal');
    t.end();
})


test('test arrays', t => {
    t.deepEqual([5, 6,], [5, 6,]);
    t.end();
})



import { NumberAdding } from './file';
let test1 = require('tape');

test('Get the name fiels of class', t => {
    let firstName = new NumberAdding('Mate');

    t.equal(firstName.getname(),'Mate');
    t.end();
})