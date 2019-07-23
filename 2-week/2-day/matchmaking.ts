'use strict';

let girls: string[] = ['Eve', ' Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = [' Joe', ' Fred', ' Tom', ' Todd', ' Neef', ' Jeff'];
let mix: string[] = [];

function makingMatches(girl: string[], boy: string[]): any {
    girl.forEach(value => {
        mix.push(value);            // first push on of them in a new list
    });

    // add the secound list elemnet between pervios element  
    let where = 1;
    for (let i = 0; i < boy.length; i++) {
        mix.splice(where, 0, boy[i]); // where helping us to have each time have index in list
        where += 2;
    }
    return mix;
}
console.log(makingMatches(girls, boys));




