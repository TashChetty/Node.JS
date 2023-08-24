"use strict";

const Subscriber = require("../models/subscriber"); // require Subscriber

exports.getAllSubscribers = (req, res, next) => { //Export getAllSubscribers to pass data from the database to the next middleware function.
  Subscriber.find({}, (error, subscribers) => {   //query with find on the subscriber model
    if (error) next(error);                       //pass an error to the next middelware function
    req.data = subscribers;                       // set data that comes back from Mongodb on request object
    next();                                       //continue to the nexr middleware function
  });
};
