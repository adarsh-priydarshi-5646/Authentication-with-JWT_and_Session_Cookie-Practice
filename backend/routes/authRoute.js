const express = require("express");
const router = express.Router();

const authMiddleware = require('../middlewares/authMiddleware.js')
const validate = require("../middlewares/validateMiddleware");

const { signUp, login, logout } = require("../controllers/authController.js");
const { signUpSchema, loginSchema } = require("../validators/auth.validators");
const { authLimiter } = require("../middlewares/rateLimiter");


router.post("/signup", authLimiter, validate(signUpSchema, "body"), signUp);
router.post("/login", authLimiter, validate(loginSchema, "body"), login);
router.post("/logout", authMiddleware, logout);


module.exports = router;
