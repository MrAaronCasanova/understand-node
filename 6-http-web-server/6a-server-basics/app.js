// grab core http module
var http = require('http');

// .createServer is an http method to create a new Server object
// method takes a callback which is actually an EventListener
// when Server object emits a certain event, the callback runs (requestListener)
http
  .createServer(function(req, res) {
    // building the head of the http response
    // first param is the status
    // second param is the headers (name value pairs)
    res.writeHead(200, { 'Content-Type': 'text-plain' });
    // there is a .send method, but .end indicates it the last thing we are sending
    res.end('Hello World\n'); // \n stand for carriage return (good practice for ending data)
  })
  .listen(1337, '127.0.0.1');
// node maps the port via .listen to the Server object returned by .createServer
// 127... standard internal IP address for local system/localhost
// when browser makes request to 127.0.0.1:1337 node will make sure the process is routed properly to the above code
