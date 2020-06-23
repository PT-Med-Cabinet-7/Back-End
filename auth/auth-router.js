const router = require("express").Router();
const Users = require("../users/users-model");
const bcrypt = require("bcryptjs");
const generateToken = require("./generateToken");
const secrets = require("./config/secrets");
const jwt = require("jsonwebtoken");

// Worked on Insomnia
router.post("/register", (req, res) => {
  const user = req.body;
  user.password = bcrypt.hashSync(user.password, 14);

  Users.add(user)
    .then((newUser) => {
      user.id = newUser[0];
      delete user.password;
      const token = generateToken(user);
      res.status(201).json({ user: user, token: token });
    })
    .catch((err) => {
      res.status(500).json({ message: "Error adding new user", err });
    });
});

// Worked on Insomnia
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then((user) => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({ username: username, token: token });
      } else {
        res.status(401).json({ message: "Invalid login" });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: "Error in login" });
    });
});

module.exports = router;
