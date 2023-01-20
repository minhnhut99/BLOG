const express = require("express");
const router = new express.Router();
router.use("/api/user", require("./routerUser"));
router.use("/api", require("./routerPost"));
module.exports = router;
