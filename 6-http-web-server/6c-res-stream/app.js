var http = require('http');
var fs = require('fs');

http
  .createServer(function(req, res) {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    // piping 'readable' files stream to 'writable' response stream
    // every chunk read from file will be buffered and piped out to the http response stream
    fs.createReadStream(__dirname + '/index.htm').pipe(res);
    // keeps app more performant by dealing with chunks rather than the entire file
  })
  .listen(1337, '127.0.0.1');
