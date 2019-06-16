'use strict';
/*
Now you are going to write a weekly feedback evaluator program. In a fictive world there is only one mentor 
with the class and we store the feedback responses in a simple txt file. Since we wanted to be quick we saved 
only the raw data. In this file within

each line represents a submitted feedback from an apprentice
the mentor is rated in 4 different metrics, those are respectively (matReview, presSkills, helpfullness, 
  explanation) separated with 1 space
Input description
m = matReview p = presSkills h = helpfulness e = explanation

m p h e
1 3 5 3   // this line is an answer from an apprenitce
2 3 4 3   // this is another response
...
Task
We would like to know what is the average rating (in each metric) of our mentor. Please write a method which 
can read and parse the example file and generates the desired output.

The method should have one parameter, the file path
The method should write to the console if the file was not found and stop gracefully
The method should return a map containing the average rating in our well-known metrics
{
  matReview => 2.25,
  presSkills => 4.0, // or 4 is fine as well
  helpfulness => 4.5,
  explanations => 3.75
} */

let fs = require('fs');
let readFile = fs.readFileSync('3.txt', 'utf-8').split('\n');
let items = readFile.map(item => item.split(' '))

let head = ['matReview', 'presSkills', 'helpfullness', 'explanation'];
//console.log(items);


for (let i = 0; i < head.length; i++) {
  let num = 0;

  items.forEach(element => {

    num += Number(element[i]) // method baraye tabdile  string be number
  });
  let result = num / items.length;
  let out = `${head[i]} => ${result}`;
  console.log(out);
}


//  hamisheh file ke RaedFileSync mishavad be string tabdil mishavad, 
//  baraye adad ke darim va mikhahim az an estafadeh konim mitavanim az Number( ) estefadeh konim.
