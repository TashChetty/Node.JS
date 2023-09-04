"use strict";

const router = require("express").Router(), //require the Express.js router
  userRoutes = require("./userRoutes"), // require all the route modules within the same directory
  subscriberRoutes = require("./subscriberRoutes"),
  courseRoutes = require("./courseRoutes"),
  errorRoutes = require("./errorRoutes"),
  homeRoutes = require("./homeRoutes");

router.use("/users", userRoutes); //use the routes from the relative route modules with namespace
router.use("/subscribers", subscriberRoutes);
router.use("/courses", courseRoutes);
router.use("/", homeRoutes);
router.use("/", errorRoutes);

module.exports = router;  //export the router from index.js
