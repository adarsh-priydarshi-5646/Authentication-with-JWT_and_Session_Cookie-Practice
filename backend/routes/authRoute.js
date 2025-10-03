const express = require("express");
const router = express.Router();
const passport = require('../config/passport.config');
const jwt = require('jsonwebtoken');

const authMiddleware = require('../middlewares/authMiddleware.js')
const validate = require("../middlewares/validateMiddleware");
const { signUp, login, logout } = require("../controllers/authController.js");
const { signUpSchema, loginSchema } = require("../validators/auth.validators");
const { authLimiter } = require("../middlewares/rateLimiter");


router.post("/signup", authLimiter, validate(signUpSchema, "body"), signUp);
router.post("/login", authLimiter, validate(loginSchema, "body"), login);
router.post("/logout", authMiddleware, logout);



// GitHub OAuth routes
router.get("/github", passport.authenticate("github", { scope: ["user:email"] }));

router.get(
  "/github/callback",
  passport.authenticate("github", { failureRedirect: "/login" }),
  (req, res) => {
    // Generate JWT token for the authenticated user
    const token = jwt.sign(
      { id: req.user.id, email: req.user.email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    // Set token in HTTP-only cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
      sameSite: "strict",
    });

    // Redirect to frontend dashboard
    // Smart origin detection based on environment
    let clientOrigin;
    
    if (process.env.NODE_ENV === 'production') {
      // Production: use environment variable or default production URL
      clientOrigin = process.env.CLIENT_ORIGIN || "https://authentication-with-jwt-and-session.vercel.app";
    } else {
      // Development: use localhost
      clientOrigin = "http://localhost:5173";
    }
    
    res.redirect(`${clientOrigin}/dashboard`);
  }
);

module.exports = router;
