var http = require('http');
var fs = require('fs');

http
  .createServer(function (req, res) {
    // reads/stores index.htm off file system - returns buffer by default
    // specify utf8 to decode binary stream to a string of HTML instead of a buffer
    var html = fs.readFileSync(__dirname + '/index.htm', 'utf8');
    var message = 'Hello World!!'; // example template content
    html = html.replace('{Message}', message); // updated string
    // .replace method was available because html was converted to a string

    // build/sends the http header
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    // builds/sends the string of html
    res.end(html);
  })
  .listen(1337, '127.0.0.1');