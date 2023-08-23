"use strict";

const mongoose = require("mongoose"), //require mongoose
  subscriberSchema = mongoose.Schema({
    name: String,
    email: String,
    zipCode: Number
  });

module.exports = mongoose.model("Subscriber", subscriberSchema); //Export the subscriber model as the only modul export
