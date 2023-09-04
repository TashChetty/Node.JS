"use strict";

const router = require("express").Router(),
  usersController = require("../controllers/usersController"); //Require Express.js Router and users controller

router.get("/", usersController.index, usersController.indexView);
router.get("/new", usersController.new);
router.post(
  "/create",
  usersController.validate,
  usersController.create,
  usersController.redirectView
);
router.get("/login", usersController.login);
router.post("/login", usersController.authenticate); // add login and authentication routes
router.get("/logout", usersController.logout, usersController.redirectView);
router.get("/:id/edit", usersController.edit);
router.put("/:id/update", usersController.update, usersController.redirectView);
router.get("/:id", usersController.show, usersController.showView);
router.delete("/:id/delete", usersController.delete, usersController.redirectView);

module.exports = router;  //export the module router
