"use strict";

const port = 3000,
  http = require("http"), //Require the http and httpstatus-codes modules.
  httpStatus = require("http-status-codes"),
  app = http.createServer((request, response) => {  //Create the server with request and response parameters.  --callback is a function waiting for another function
    console.log("Received an incoming request!");
    response.writeHead(httpStatus.OK, {
      "Content-Type": "text/html"
    }); // Write the response to the client

    let responseMessage = "<h1>Hello, Universe!</h1>";
    response.write(responseMessage);
    response.end();
    console.log(`Sent a response : ${responseMessage}`);
  });

app.listen(port);  //Tell the application server to listen on port 3000.
console.log(`The server has started and is listening on port number: ${port}`);
