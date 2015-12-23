var express = require('express');
var http = require('http');
var path = require('path');
var jsonServer = require('json-server');

// CONFIGURE json middleware
var jsons = jsonServer.create();
jsons.use(jsonServer.defaults());
var jsonRouter = jsonServer.router('server/db.json');

// CONFIGURE Express App Server
var app = express();

// add route for JSON stuff
app.use('/api', jsonRouter); // use json middleware in /api

// add static directory for static files
app.use(express.static(
  path.join(__dirname, '..', 'web')));

// launch a HTTP server running express (which is configured
//	with the json-server middleware and static routes)
var server = http.createServer(app);
server.listen(3000, function() {
  console.log('Server started on port 3000');
});
