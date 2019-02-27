let http = require('http');

let server = http.createServer(function(req,res){
  res.writeHead(200,{'content-type': 'text-plain'});
  res.end('hey majko ');
})

server.listen(3000,'127.0.0.0.1');
console.log('hey you, its port 3000');
