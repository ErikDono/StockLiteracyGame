const router = require("express").Router();
const User = require("../../models/User");
var passport = require("../../config/passport");
var LocalStrategy = require("passport-local").Strategy;

router.post("/login", function (req, res, next) {
    console.log(req.body)
    console.log('================')
    next()
}, passport.authenticate("local"), function (req, res) {
    console.log("Post to /login")
    const user = JSON.parse(JSON.stringify(req.user))
    const CleanUser = Object.assign({}, user)
    if (cleanUser.local) {
        console.log(`Deleting ${cleanUser.local.password}`)
        delete cleanUser.local.password
    }
    res.json({ user: cleanUser });
});

router.post('/signup', function (req, res) {
    User.create({
        username: req.body.username,
        password: req.body.password
    }).then(function () {
        console.log(username)
        console.log("YAAAAYYY")
        res.redirect(307, "/login");
    })
        .catch(function (err) {
            console.log("You got an error here")
            res.status(401).json(err);
        })
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