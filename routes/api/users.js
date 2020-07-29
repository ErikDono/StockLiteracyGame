const router = require("express").Router();
const User = require("../../models/User");
var passport = require("../../config/passport");
const { response } = require("express");
var LocalStrategy = require("passport-local").Strategy;


router.post('/login', function (req, res) {
    User.findOne({
        username: req.body.username
    }, function (err, user) {
        console.log("This is my: " + user)
        if (err) throw err;

        if (!user) {
            res.status(401).send({ success: false, msg: 'Authentication failed. User not found.' });
        } else {
            console.log("My password:");
            // check if password matches
            user.validPassword(req.body.password, function (err, isMatch) {

                if (isMatch && !err) {
                    console.log("Yay");
                    res.send({ message: "You are logged in" })
                    // if user is found and password is right create a token
                    var token = jwt.sign(user.toJSON(), settings.secret);
                    // return the information including token as JSON
                    res.json({ success: true, token: 'JWT ' + token });
                } else {
                    res.status(401).send({ success: false, msg: 'Authentication failed. Wrong password.' });
                }
            });
        }
    });
});

router.post('/signup', function (req, res) {
    if (!req.body.username || !req.body.password) {
        res.json({ success: false, msg: 'Please pass username and password.' });
    } else {
        var newUser = new User({
            username: req.body.username,
            password: req.body.password
        });
        // save the user
        newUser.save(function (err) {
            if (err) {
                return res.json({ success: false, msg: 'Username already exists.' });
            }
            res.json({ success: true, msg: 'Successful created new user.' });
        });
    }
});


// router.get('/login', passport.authenticate('jwt', { session: false }), function (req, res) {
//     var token = getToken(req.headers);
//     if (token) {
//         User.findOne({
//             username: req.user.username
//         },
//             function (err, users) {
//                 if (err) return next(err);
//                 // console.log(users);
//                 res.json(users);
//             });
//     } else {
//         return res.status(403).send({ success: false, msg: 'Unauthorized user.' });
//     }
// });

module.exports = router;