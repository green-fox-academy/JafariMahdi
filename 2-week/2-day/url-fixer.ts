'use strict';
// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crutial component, find out what it is and insert it too!


let url: string = 'https//www.reddit.com/r/nevertellmethebots';

let a = /https/gi;//montion text in file you want change that  whit the** /,,,/gi** you have to use this100%

let b = url.replace(a, 'http:');        // use  replace method in this line 

let c = /bots/gi;      // for the end also  montion the file we wanna change that whit ** / '  ' / gi  ** in the end  

let d = b.replace(c, 'odds');

console.log(d);







