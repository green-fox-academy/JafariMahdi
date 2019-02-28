/*
let http = require('http');

let server = http.createServer(function(req,res){
  res.writeHead(200,{'content-type': 'text-plain'});
  res.end('hey majko ');
})

server.listen(3000,'127.0.0.0.1');
console.log('hey you, its port 3000');
*/

'use strict ';

const express = require('express');
const app = express();     // save this method in this app 

const PORT = 3000;                  // port number  * it always must be capital letter 
const path = require('path');


app.use('/ assets', express.static('assets'))


app.get('/', (req, res) => {               // two argument for the requst and send,,
  res.sendFile(__dirname + '/index.html');  // # dirname  => diracty name use always
});

app.get('/about', (req, res) => {
  console.log(req.query);
  let data = req.query;

  res.send(`<h1>this is about ${req.query.name}</h1>`);
});

app.get('/contact/ : id', (req, res) => {  // getting  something uinq from the url  
  res.send(`<h1>${req.params.id} </h1>`)
});



app.listen(PORT, () => {             // sey to server hey listen
  console.log(`server is running at ${PORT}`);

})  
