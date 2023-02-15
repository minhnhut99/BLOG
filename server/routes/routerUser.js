const express = require("express");
const API_CONSTANT = require("../config/ApiConstant");
const controllerUser = require("../controllers/controllerUser");
const authenticationToken = require("../middleware/auth");
const router = new express.Router();

router.post(API_CONSTANT.LOGIN, controllerUser.login);
router.post(API_CONSTANT.REGISTER, controllerUser.register);
router
  .route("/profile")
  .get(authenticationToken, controllerUser.getUserProfile);
module.exports = router;
