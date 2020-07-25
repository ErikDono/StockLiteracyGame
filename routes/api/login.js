const router = require("express").Router();
const User = require("../../controllers/userController");


router.route("/")
    .get(User.findAll)
    .post(User.add);

module.exports = router;