const router = require("express").Router();
const Users = require("../models/user.model.js");
const bcrypt = require("bcrypt");

router.route("/").get((req, res) => {
  Users.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error : " + err));
});

//signup

router.route("/register").post((req, res) => {
  const { username } = req.body;

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(req.body.password, salt, (err, hashedPassword) => {
      const password = hashedPassword;
      const newUser = new Users({ username, password });
      newUser
        .save()
        .then(() => res.json("New User added"))
        .catch((err) => res.status(400).json("Error : ", err));
    });
  });
});

//login

router.route("/login").post(async (req, res) => {
  try {
    var user = await Users.findOne({ username: req.body.username });
    if (!user) {
      return res.status(400).send("User not found please register");
    }

    var validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
      return res.send("Password is incorrect!!");
    }
    res.send("Login Successfull");
  } catch (error) {
    res.status(400).json("Error : ", err);
  }
});

module.exports = router;
