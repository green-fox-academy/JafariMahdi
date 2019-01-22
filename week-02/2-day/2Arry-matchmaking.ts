'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// If someone has no pair, he/she should be the element of the array too
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

let girls: string[] = ['Eve', ' Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = [' Joe', ' Fred', ' Tom', ' Todd', ' Neef', ' Jeff'];
let mix : string[]= [];

function makingMatches(a,b){
    for(let i =0; i <= a.length;i ++){
        if(a[i] && b[i]){
            mix.push(b[i].concat(a[i])) 
        }else if(
            a[i]){
            mix.push(a[i]) 
        } else if(b[i])
            mix.push(b[i])
            
        }
                
                
    
}
makingMatches(girls,boys);
console.log(mix);


//console.log(makingMatches(girls, boys));

//export = makingMatches;