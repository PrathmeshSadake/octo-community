const express = require("express");
const router = express.Router();

const auth = require("../../middleware/auth");
const User = require("../../models/Users");

const config = require("config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const { check, validationResult } = require("express-validator");

router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    console.log(user);
    res.json(user);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

// POST req. Login user and get token
router.post(
  "/",
  [
    check("email").isEmail().withMessage("Please include a valid email"),
    check("password").exists().withMessage("Password is required. "),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      // console.log(user);
      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid credentials" }] });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid credentials" }] });
      }

      jwt.sign(
        { user: { id: user._id } },
        config.get("jwtSecret"),
        { expiresIn: "90d" },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.log(err);
      res.status(500).send("Sever Error");
    }
  }
);

module.exports = router;
