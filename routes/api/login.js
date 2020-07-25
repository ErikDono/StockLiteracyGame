const router = require("express").Router();
const User = require("../../models/User");
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;



router.get('/login', passport.authenticate('jwt', { session: false }), function (req, res) {
    var token = getToken(req.headers);
    if (token) {
        User.findOne({
            username: req.user.username
        },
            function (err, users) {
                if (err) return next(err);
                // console.log(users);
                res.json(users);
            });
    } else {
        return res.status(403).send({ success: false, msg: 'Unauthorized user.' });
    }
});

module.exports = router;