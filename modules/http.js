let http = require('http');
const port = 3001;
const server = http.createServer((request, response) => {
    const ipAddress = request.socket.remoteAddress;

    response.writeHead(200, {
        'Content-Type': 'text/html',
        'Trailer': 'Content-MD5'
    });

    const requestUrl = require('url').parse(request.url, true);
    const requestUrlJson = JSON.stringify(requestUrl);

    response.write(`IP Address is ${ipAddress} \r\n`);
    response.write(`URL is ${request.url} `);
    response.write(`Detail request's url is ${requestUrlJson}`);
    response.end();
}).listen(port);

console.log(`Server is running on port ${port}`)