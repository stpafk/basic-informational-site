const http = require("http");
const fs = require("fs");

http
  .createServer(function (req, res) {

    let filename = "";
    if (req.url === "/") {
      filename = "." + "/index.html";
    } else {
      filename = "." + req.url;
    }

    fs.readFile(filename, function (err, data) {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("<h1>404 Not Found</h1>");
        return res.end();
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      }
    });
  })
  .listen(8080);