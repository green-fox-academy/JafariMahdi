'use strict';
// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crutial component, find out what it is and insert it too!

let url: any = 'https//www.reddit.com/r/nevertellmethebots';

let b = /bots/gi;
let url1 = url.replace(b, 'odds');

url1 = url.slice(0, 5).concat(':').concat(url1.slice(5));

console.log(url1);