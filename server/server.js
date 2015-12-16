var express = require('express');
var http = require('http');
var path = require('path');

var app = express();
app.use(express.static(
  path.join(__dirname, '..', 'web')));

app.get('/hello', function(req, res) {
  res.send('hello world!');
});

var server = http.createServer(app);
server.listen(3000, function() {
  console.log('Server started on port 3000');
});
