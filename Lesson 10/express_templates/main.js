"use strict";

const express = require("express"), //require the normal Express.js module 
  app = express(),                   //require the app object
  homeController = require("./controllers/homeController"), // require the homeController.js
  layouts = require("express-ejs-layouts"); // require layouts

app.set("port", process.env.PORT || 3000);  //set your server to listen on port 3000
app.set("view engine", "ejs");          // this line is to tell Express.js to set its view engine as EJS- it must expect ejs in views folder

app.use(layouts);
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());

app.use((req, res, next) => {
  console.log(`request made to: ${req.url}`);
  next();
});

app.get("/name", homeController.respondWithName);
app.get("/items/:vegetable", homeController.sendReqParam);

app.post("/", (req, res) => {
  console.log(req.body);
  console.log(req.query);
  res.send("POST Successful!");
});

app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});
