"use strict";

const express = require("express"), // require express
  app = express(),              // instantiate the express application 
  errorController = require("./controllers/errorController"),
  homeController = require("./controllers/homeController"),
  layouts = require("express-ejs-layouts"),
  mongoose = require("mongoose"), // require Mongoose
  Subscriber = require("./models/subscriber"); //require subscriber

mongoose.connect(
  "mongodb://localhost:27017/recipe_db", // setting up the connection to the database
  { useNewUrlParser: true }
);
mongoose.set("useCreateIndex", true);
const db = mongoose.connection; //assign the database to the db variable

db.once("open", () => { //log a message when the application connects to the database
  console.log("Successfully connected to MongoDB using Mongoose!");
});

var myQuery = Subscriber.findOne({
  name: "Jon Wexler"
}).where("email", /wexler/);

myQuery.exec((error, data) => {
  if (data) console.log(data.name);
});     //logging a callback function to handle errors and data

app.set("port", process.env.PORT || 3000);  //listen on port 3000
app.set("view engine", "ejs");     //tell Express.js to set its view engine as EJS

app.use(express.static("public"));  //use corresponding public folder to serve static files
app.use(layouts);   //set the app to use layouts
app.use(
  express.urlencoded({    //Tell the Express.js app to use body-parser for processing URLencoded and JSON parameters
    extended: false
  })
);
app.use(express.json());
app.use(homeController.logRequestPaths);

app.get("/name", homeController.respondWithName); //Add routes
app.get("/items/:vegetable", homeController.sendReqParam);  //Handle GET requests to "/items/:vegetable".

app.post("/", (req, res) => { //post request
  console.log(req.body);
  console.log(req.query);
  res.send("POST Successful!");
});

app.use(errorController.logErrors);
app.use(errorController.respondNoResourceFound);  //error handling middleware
app.use(errorController.respondInternalError);

app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});
