const rateLimit = require("express-rate-limit");

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 20, // max 20 requests per IP in window
  message: { message: "Too many requests, try again later." }
});

module.exports = {
  authLimiter
};
