"use strict";

exports.sendReqParam = (req, res) => {    //Create a function to handle route-specific requests
  let veg = req.params.vegetable;
  res.send(`This is the page for ${veg}`);
};
