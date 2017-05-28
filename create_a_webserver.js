var fs = require('fs');
var http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    if (req.url === '/') {
        fs.createReadStream(__dirname + '/templates/index.html').pipe(res);
    }

}).listen(8000, '127.0.0.1');

console.log("server started on port 8000!");