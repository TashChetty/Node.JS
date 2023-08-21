"use strict";

exports.sendReqParam = (req, res) => {
  let veg = req.params.vegetable;
  res.send(`This is the page for ${veg}`);
};

exports.respondWithName = (req, res) => { //added a function called respondWithName
  res.render("index");  //we use a render method on the response object to respond with a view
};

