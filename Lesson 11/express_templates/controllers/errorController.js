"use strict";

const httpStatus = require("http-status-codes");

exports.logErrors = (error, req, res, next) => {    //add middleware to handle errors
  console.error(error.stack);                       // log the error stack
  next(error);                                      // pass the error to the next middleware function
};

exports.respondNoResourceFound = (req, res) => {        //respond with 404. this is a client side error
  let errorCode = httpStatus.NOT_FOUND;
  res.status(errorCode);
  res.send(`${errorCode} | The page does not exist!`);
};

exports.respondInternalError = (error, req, res, next) => { // catch all errors and respond with 500. This is a server side error
  let errorCode = httpStatus.INTERNAL_SERVER_ERROR;
  console.log(`ERROR occurred: ${error.stack}`);
  res.status(errorCode);
  res.send(`${errorCode} | Sorry, our application is experiencing a problem!`);
};
