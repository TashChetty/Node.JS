"use strict";

const express = require("express"),   //reqire express
  app = express(),              // instantiate the express application      
  homeController = require("./controllers/homeController"), //require homeController
  errorController = require("./controllers/errorController"), // require errorController
  layouts = require("express-ejs-layouts"); // require layouts

app.set("view engine", "ejs");  //tell Express.js to set its view engine as EJS
app.set("port", process.env.PORT || 3000); //listen on port 3000
app.use(
  express.urlencoded({  //Tell the Express.js app to use body-parser for processing URLencoded and JSON parameters
    extended: false
  })
);
app.use(express.json());
app.use(layouts);   //set the app to use layouts
app.use(express.static("public"));  //use corresponding public folder to serve static files

app.get("/", (req, res) => {    //create a route for the home page
  res.render("index");
});

app.get("/courses", homeController.showCourses);  //Add routes for the courses page 
app.get("/contact", homeController.showSignUp); //Add routes for the contact page
app.post("/contact", homeController.postedSignUpForm);  //Add routes for the contact form submission

app.use(errorController.pageNotFoundError); // error handling middleware
app.use(errorController.internalServerError); // error handling middleware

app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});
