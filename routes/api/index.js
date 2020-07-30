const router = require("express").Router();
const LoginRoute = require("./users");
const stockRoute = require('./stocks');

// Book routes
router.use("/", LoginRoute);
router.use('/stocks', stockRoute);

module.exports = router;
