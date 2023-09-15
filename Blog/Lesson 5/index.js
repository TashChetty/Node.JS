"use strict"
const express = require("express");
const path = require("path");
const app = new express();
const ejs = require("ejs");
const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser:
//true});
mongoose.connect('mongodb://127.0.0.1:27017/my_database', {useNewUrlParser:true});

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
//  res.sendFile(path.resolve(__dirname, "public/pages/index.html"));
    res.render("index");
});

app.get("/about", (req, res) => {
//  res.sendFile(path.resolve(__dirname, "public/pages/about.html"));
  res.render("about");
});
app.get("/contact", (req, res) => {
//  res.sendFile(path.resolve(__dirname, "public/pages/contact.html"));
  res.render("contact");
});
app.get("/post", (req, res) => {
// res.sendFile(path.resolve(__dirname, "public/pages/post.html"));
  res.render("post");
});

app.listen(4000, () => {
  console.log("App listening on port 4000");
});
