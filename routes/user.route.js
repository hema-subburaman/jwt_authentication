const router = require("express").Router();
const Users = require("../models/user.model.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.route("/").get((req, res) => {
  Users.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error : " + err));
});

//signup

router.route("/register").post(async (req, res) => {
  try {
    const { username, password } = req.body;

    const existingUser = await Users.findOne({ username });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Username already exists",
      });
    }
    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new Users({
      username,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({
      success: true,
      message: "User registered successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

//login

router.route("/login").post(async (req, res) => {
  try {
    const user = await Users.findOne({ username: req.body.username });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found. Please register",
      });
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password,
    );
    if (!validPassword) {
      return res.status(400).json({
        success: false,
        message: "Password is incorrect",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        username: user.username,
      },
      process.env.ACCESS_TOKEN,
      {
        expiresIn: "1d",
      },
    );
    res.status(200).json({
      success: true,
      message: "Login Successful",
      token,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
