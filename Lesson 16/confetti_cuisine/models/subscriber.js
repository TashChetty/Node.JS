"use strict";

const mongoose = require("mongoose"), //require mongoose
  subscriberSchema = mongoose.Schema({
    name: String,
    email: String,
    zipCode: Number
  });                                 //define schema properties

module.exports = mongoose.model("Subscriber", subscriberSchema);  //export the model
