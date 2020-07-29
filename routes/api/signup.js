const router = require("express").Router();
const User = require("../../models/User");
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;



router.post('/signup', passport.authenticate('local', { session: false }), function (req, res) {
    User.save({
        username: req.user.username,
        password: req.user.password
    },
        function (err, users) {
            if (err) return next(err);
            console.log(users);
            res.json(users);
        });

});

module.exports = router;