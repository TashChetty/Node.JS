"use strict";

const router = require("express").Router(),
  coursesController = require("../controllers/coursesController");  //Require courses controller.

router.get("/courses/:id/join", coursesController.join, coursesController.respondJSON); //Add the API route to the Express.js Router
router.get(
  "/courses",
  coursesController.index,
  coursesController.filterUserCourses,
  coursesController.respondJSON
);
router.use(coursesController.errorJSON); //Add API error-handling middleware.

module.exports = router;
