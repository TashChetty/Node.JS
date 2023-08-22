"use strict";

const httpStatus = require("http-status-codes");

exports.pageNotFoundError = (req, res) => {   //handle all requests not previouly handled
  let errorCode = httpStatus.NOT_FOUND;
  res.status(errorCode);
  res.render("error");
};

exports.internalServerError = (error, req, res, next) => {  // handle any internal server errors
  let errorCode = httpStatus.INTERNAL_SERVER_ERROR;
  console.log(`ERROR occurred: ${error.stack}`);
  res.status(errorCode);
  res.send(`${errorCode} | Sorry, our application is taking a nap!`);
};
