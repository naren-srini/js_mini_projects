// Here we use express, import it
const express = require("express");
router = express.Router();
userRoute = require("../controllers/userController");

// Get our router to get to controller
// The "/" is an address of the proxy so specify it in proxy
router.get("/", userRoute.userController);

// Exporting the module
module.exports = router;