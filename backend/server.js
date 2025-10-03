require('dotenv').config()
const express = require("express");
const cookieParser = require('cookie-parser')
const app = express();
const cors = require("cors");

const userRoute = require('./routes/userRoute.js')
const authRoutes = require('./routes/authRoute.js')

app.use(express.json())
app.use(cookieParser());

app.use(cors({
  origin: process.env.CLIENT_ORIGIN || "http://localhost:3000",
  credentials: true
}));


app.use("/auth", authRoutes);
app.use('/users', userRoute)


const PORT = process.env.PORT || 8080;

app.listen(PORT, (err) => {
  if (err) console.log("Error:", err);
  else console.log(`Server running on port ${PORT}`);
});
