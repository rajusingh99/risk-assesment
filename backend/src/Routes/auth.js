<<<<<<< HEAD
const express = require("express");
const { register, login, logout } = require("../Controllers/auth");
const { auth } = require("../middlewares/auth");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", auth, logout);
=======
const express = require('express');
const { register, login,logout } = require('../Controllers/auth');
const router = express.Router();

router.post('/register',register);
router.post('/login',login)
router.post('/logout',logout)
>>>>>>> a441da9a9a19600dd55d9dffffe6b0318e33683a

module.exports = router;
