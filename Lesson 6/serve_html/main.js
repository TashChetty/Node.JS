const port = 3000,
http = require("http"), 
httpStatus = require("http-status-codes"),
fs = require("fs");  //Requiring the fs module
const routeMap = {
    "/": "views/index.html"  //Setting up route mapping for HTML files
    };
    http
    .createServer((req, res) => {   // creating server with request and response -- callback functions
    res.writeHead(httpStatus.OK, {
    "Content-Type": "text/html"
    });
    if (routeMap[req.url]) {
    fs.readFile(routeMap[req.url], (error, data) => { //Reading the contents of the mapped file.
    res.write(data);                                  //Respond with file contents
    res.end();
    });
    } else {
    res.end("<h1>Sorry, not found.</h1>");
    }
    })
    .listen(port);
    console.log("The server has started and is listening on port number: ${port}");