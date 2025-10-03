require('dotenv').config()
const express = require("express");
const cookieParser = require('cookie-parser')
const session = require('express-session');
const passport = require('./config/passport.config');
const helmet = require('helmet');
const app = express();
const cors = require("cors");

const userRoute = require('./routes/userRoute.js')
const authRoutes = require('./routes/authRoute.js')

// Security middleware
app.use(helmet({
  crossOriginEmbedderPolicy: false,
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", "data:", "https:"],
    },
  },
}));

app.use(express.json({ limit: '10mb' }));
app.use(cookieParser());

// CORS configuration for development and production
const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    const allowedOrigins = [
      process.env.CLIENT_ORIGIN || "http://localhost:5173",
      "http://localhost:5173",
      "http://localhost:3000",
      "https://authentication-with-jwt-and-session.vercel.app"
    ];
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Cookie']
};

app.use(cors(corsOptions));

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
  else console.log(`Server running on port ${PORT}`);
});
