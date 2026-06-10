const express = require("express");

const route = express.Router();

const auth = require("../middleware/authMiddleware");

const { register, login, getUser } = require("../controllers/authController");

route.get("/me", auth, getUser);

route.post("/register", register);

route.post("/login", login);

module.exports = route