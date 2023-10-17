const http = require('http');
const fs = require('fs').promises

http.createServer(function(req, res) {
    if (req.url === "/") {
        res.writeHead(200, {'Content-Type': "text/html"});
        res.write("<p>Hello</>")
        return res.end();
    } 

    else {
        res.writeHead(500, {'Content-Type': 'text/html'});
        res.write("<p>Error</>");
        return res.end()
    }
}).listen(8080)