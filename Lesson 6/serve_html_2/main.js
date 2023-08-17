"use strict";

const port = 3000,
  http = require("http"),
  httpStatus = require("http-status-codes"),
  fs = require("fs");

const sendErrorResponse = res => {      //Create an errorhandling function
  res.writeHead(httpStatus.NOT_FOUND, {
    "Content-Type": "text/html"
  });
  res.write("<h1>File Not Found!</h1>");
  res.end();
};

http
  .createServer((req, res) => {
    let url = req.url;                  //Store the request’s URL in a variable url.
    if (url.indexOf(".html") !== -1) {  //Check the URL to see whether it contains a file extension
      res.writeHead(httpStatus.OK, {
        "Content-Type": "text/html"
      });
      customReadFile(`./views${url}`, res); //Call read File to read file contents + Customize the response’s content type
    } else if (url.indexOf(".js") !== -1) {
      res.writeHead(httpStatus.OK, {
        "Content-Type": "text/javascript"
      });
      customReadFile(`./public/js${url}`, res);
    } else if (url.indexOf(".css") !== -1) {
      res.writeHead(httpStatus.OK, {
        "Content-Type": "text/css"
      });
      customReadFile(`./public/css${url}`, res);
    } else if (url.indexOf(".png") !== -1) {
      res.writeHead(httpStatus.OK, {
        "Content-Type": "image/png"
      });
      customReadFile(`./public/images${url}`, res);
    } else {
      sendErrorResponse(res);
    }
  })
  .listen(3000);
console.log(`The server is listening on port number: ${port}`);

const customReadFile = (file_path, res) => {        //Look for a file by the name requested
  if (fs.existsSync(file_path)) {
    fs.readFile(file_path, (error, data) => {       //Check whether the file exists
      if (error) {
        console.log(error);
        sendErrorResponse(res);
        return;
      }
      res.write(data);
      res.end();
    });
  } else {
    sendErrorResponse(res);
  }
};


//http://localhost:3000 = File not found.
//http://localhost:3000/index.html = Welcome!