require('dotenv').config()
const express = require("express");
const cookieParser = require('cookie-parser')
const session = require('express-session');
const passport = require('./config/passport.config');
const app = express();
const cors = require("cors");

const userRoute = require('./routes/userRoute.js')
const authRoutes = require('./routes/authRoute.js')

app.use(express.json());
app.use(cookieParser());

// Simple CORS configuration
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://authentication-with-jwt-and-session.vercel.app"
  ],
  credentials: true
}));

// Session configuration for OAuth
app.use(session({
  secret: process.env.SESSION_SECRET || 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});


app.use("/auth", authRoutes);
app.use('/users', userRoute)


const PORT = process.env.PORT || 8080;

app.listen(PORT, (err) => {
  if (err) console.log("Error:", err);
  else console.log(`🚀 Server running on port ${PORT} - Updated!`);
});
