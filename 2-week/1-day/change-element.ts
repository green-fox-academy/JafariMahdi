
let numlist: number[] = [1, 2, 3, 8, 5, 6];

let newlist = numlist.map(value => {
    if (value === 8) {
        value = 4
    }
    return value
})
// return becuse we can use the new varible and have log or print for it

console.log(newlist);
console.log(newlist[3]);


