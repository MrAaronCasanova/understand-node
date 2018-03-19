var http = require('http');
var fs = require('fs');

http
  .createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    // created a regular object to be serialized to JSON for our basic API
    var obj = {
      firstName: 'Aaron',
      lastName: 'Casanova'
    };
    // sends the JSON
    res.end(JSON.stringify(obj));
    // JSON.stringify performs the serialization of the obj to JSON
  })
  .listen(1337, '127.0.0.1');

// very basic single endpoint API
