"use strict";

const express = require("express"),
  app = express(),
  homeController = require("./controllers/homeController"),
  errorController = require("./controllers/errorController"),
  subscribersController = require("./controllers/subscribersController"), //require teh subscribers controller
  layouts = require("express-ejs-layouts");

const mongoose = require("mongoose");     //require mongoose
mongoose.connect(
  "mongodb://localhost:27017/confetti_cuisine", //set up the database connection
  { useNewUrlParser: true }
);
mongoose.set("useCreateIndex", true);
app.set("view engine", "ejs");
app.set("port", process.env.PORT || 3000);
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());
app.use(layouts);
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/subscribers", subscribersController.getAllSubscribers); //add a route to view all subscribers
app.get("/contact", subscribersController.getSubscriptionPage); //add a route to view the contact page
app.post("/subscribe", subscribersController.saveSubscriber);   //add a route to handle posted form data

app.get("/courses", homeController.showCourses);
app.post("/contact", homeController.postedSignUpForm);

app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});
