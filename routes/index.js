var express = require("express");
var router = express.Router();
const userModel = require("../models/user.models")
const passport = require("passport")
const localStrategy = require("passport-local")
passport.use(new localStrategy(userModel.authenticate()));
router.get("/", function (req, res, next) {
  res.render("index");
});

router.get("/aboutus", function (req, res) {
  res.render("about-us");
});
router.get("/login", function (req, res) {
  res.render("login");
});
router.get("/register", function (req, res) {
  res.render("register");
});
router.get("/blogs", function (req, res) {
  res.render("blogs");
});
router.get("/dashboard", function (req, res) {
  res.render("profile");
});
router.get("/dashboard/profile", function (req, res) {
  res.render("profile");
});
router.get("/dashboard/workout", function (req, res) {
  res.render("workout");
});
router.get("/dashboard/diet-info", function (req, res) {
  res.render("diet-info");
});
router.get("/dashboard/meditation", function (req, res) {
  res.render("meditation");
});
router.get("/dashboard/progress-tracker", function (req, res) {
  res.render("progress-tracker");
});


// router.post("/register", function (req, res, next) {
//   const userData = new userModel({
//     email: req.body.email,
//     username: req.body.username,
//     age: req.body.age,
//     gender: req.body.gender,
//     height: req.body.height,
//     weight: req.body.weight,

//   });
//   userModel.register(userData, req.body.password).then(function () {
//     passport.authenticate("local")(req, res, function () {
//       res.redirect("/dashboard");
//     });
//   });
// });

// router.post("/login", passport.authenticate("local", {
//   successRedirect: "/dashboard",
//   failureRedirect: "/login",
// }), function (req, res) { });

module.exports = router;
