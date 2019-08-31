'use strict';

var http = require('http');
var port = 3032;
var server = http.createServer(function (request, response) {
    var ipAddress = request.socket.remoteAddress;

    response.writeHead(200, {
        'Content-Type': 'text/html',
        'Trailer': 'Content-MD5'
    });

    var requestUrl = require('url').parse(request.url, true);
    var requestUrlJson = JSON.stringify(requestUrl);

    response.write('IP Address is ' + ipAddress + ' \r\n');
    response.write('URL is ' + request.url + ' ');
    response.write('Detail request\'s url is ' + requestUrlJson);
    response.end();
}).listen(port);

console.log('Server is running on port ' + port);
console.log('Hello ...');