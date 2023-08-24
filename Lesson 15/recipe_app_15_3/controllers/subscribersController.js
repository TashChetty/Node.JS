"use strict";

const Subscriber = require("../models/subscriber"); //require subscriber module

exports.getAllSubscribers = (req, res) => {   //rewrite the AllSubscribers action
  Subscriber.find({})
    .exec()                                   //return a promise from the find query
    .then(subscribers => {                    //Send saved data to the next then code block
      res.render("subscribers", {
        subscribers: subscribers
      });                                     //serve results from teh database
    })
    .catch(error => {                         //catch errors that are rejected in teh promise
      console.log(error.message);
      return [];
    })
    .then(() => {                           //end the promise chain with a log message
      console.log("promise complete");
    });
};

exports.getSubscriptionPage = (req, res) => {
  res.render("contact");
};

exports.saveSubscriber = (req, res) => {
  let newSubscriber = new Subscriber({
    name: req.body.name,
    email: req.body.email,
    zipCode: req.body.zipCode
  });
  newSubscriber
    .save()
    .then(result => {                 //save a new subscriber with a promise return
      res.render("thanks");
    })
    .catch(error => {
      if (error) res.send(error);
    });
};
