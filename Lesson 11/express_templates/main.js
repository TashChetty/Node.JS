"use strict";

const express = require("express"), //require the normal Express.js module 
  app = express(),  
  errorController = require("./controllers/errorController"),                 //require the app object
  homeController = require("./controllers/homeController"), // require the homeController.js
  layouts = require("express-ejs-layouts"); // require layouts

app.set("port", process.env.PORT || 3000);  //set your server to listen on port 3000
app.set("view engine", "ejs");          // this line is to tell Express.js to set its view engine as EJS- it must expect ejs in views folder

app.use(express.static("public"));  //use corresponding public folder to serve static files
app.use(layouts);
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());
app.use(homeController.logRequestPaths);



app.get("/name", homeController.respondWithName);
app.get("/items/:vegetable", homeController.sendReqParam);

app.post("/", (req, res) => {
  console.log(req.body);
  console.log(req.query);
  res.send("POST Successful!");
});

app.use(errorController.logErrors);
app.use(errorController.respondNoResourceFound);  // error handling miidleware
app.use(errorController.respondInternalError);    // error handling middleware

app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});
