"use strict";

const Subscriber = require("../models/subscriber");

exports.getAllSubscribers = (req, res, next) => {
  Subscriber.find({}, (error, subscribers) => {
    if (error) next(error);
    req.data = subscribers;
    next();
  });
};

exports.getSubscriptionPage = (req, res) => {   //add an action to render the the contact page
  res.render("contact");
};

exports.saveSubscriber = (req, res) => {    //add an action to save subscribers
  let newSubscriber = new Subscriber({
    name: req.body.name,
    email: req.body.email,
    zipCode: req.body.zipCode
  });                                     //create a new subscriber
  newSubscriber.save((error, result) => { //save a new subscriber
    if (error) res.send(error); 
    res.render("thanks");
  });
};
