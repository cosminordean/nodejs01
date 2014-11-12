#!/bin/env node

var sys  = require('sys'),
 my_http = require('http');

my_http.createServer(function(req, res) {
  sys.puts("Server start");
  res.writeHeader(200, {"Content-Type": "text/plain"});
  res.write("Hello World");
  res.end();
}).listen(8080);
sys.puts("Server running on port 8080");
