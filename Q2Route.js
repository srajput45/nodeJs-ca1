const http = require("http");
const routes = require('./Q2');
http.createServer(routes).listen(8080);