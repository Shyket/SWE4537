const http = require("http");

const server = http.createServer((req,res) => {
    if (req.url === "/") {
      res.writeHead(201, { "Content-Type": "text/html" });
      res.write("<h1>base url<h1>");
      res.end();
    } else if (req.url === "/home") {
      res.writeHead(201, { "Content-Type": "text/html" });
      res.write("<h1>home<h1>");
      res.end();
    }else{
       res.writeHead(201, { "Content-Type": "text/html" });
       res.write("<h1>Invalid request<h1><a href='/home'>Go Home</a>");
       res.end(); 
    }
});

server.listen(9000);