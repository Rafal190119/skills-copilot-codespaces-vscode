// create web server
var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');

// create server
http.createServer(function(req, res) {
  var pathname = url.parse(req.url).pathname;
  console.log('Request for ' + pathname + ' received.');
});