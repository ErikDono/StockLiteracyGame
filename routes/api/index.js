const router = require("express").Router();
const LoginRoute = require("./login");

// Book routes
router.use("/", LoginRoute);

module.exports = router;
