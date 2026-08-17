const express = require("express");

const router = express.Router();

router.post("/register", (req, res) => {
  res.json({ message: "User registered successfully" });
});

router.post("/login", (req, res) => {
  res.json({ message: "logged In" });
});

router.get("/current", (req, res) => {
  res.json({ message: "Cuurent user information" });
});

module.exports = router;
