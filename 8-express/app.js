var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

// middleware examples
// the function will run inbetween the request and response of the specified route
// vvv custom middleware
app.use('/api', function(req, res, next) {
  console.log('I am the /api route middleware!!');
  next();
});
// if no route is specified the function will be called for every request
// vvv (standard) for serving you public/static files
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index');
});

// utilizing route params/variable (:arbitrary-string)
app.get('/person/:name', function(req, res) {
  res.render('person', {
    NAME: req.params.name
  }); // route params can be accessed through req.params
});

app.get('/api', function(req, res) {
  // automatically converts object to json
  res.json({
    firstname: 'Aaron',
    lastname: 'Casanova'
  });
});

app.listen(port, function() {
  console.log('Server started on port: ' + port);
});
