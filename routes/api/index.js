const router = require("express").Router();
const LoginRoute = require("./users");
const SignupRoute = require('./signup');

// Book routes
router.use("/", LoginRoute);
// router.use('/signup', SignupRoute);

module.exports = router;
