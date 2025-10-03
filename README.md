# 🔐 Full-Stack Authentication System

<div align="center">
  
<p align="center">
  <img src="https://static.vecteezy.com/system/resources/previews/016/071/197/non_2x/desktop-login-isometric-illustration-light-gradient-suitable-for-mobile-app-website-banner-diagrams-infographics-and-other-graphic-assets-vector.jpg"  alt="Logo" width="150" height="150"/>
</p>


<h3 align="center">🚀 A complete, secure, and production-ready authentication system built with modern technologies 🚀</h3>

<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&pause=1000&color=667EEA&center=true&vCenter=true&width=435&lines=JWT+%26+Session+Authentication;GitHub+OAuth+Integration;Secure+%26+Production+Ready;Modern+React+Frontend;Node.js+%26+Express+Backend" alt="Typing SVG" />
</p>

[![GitHub Stars](https://img.shields.io/github/stars/adarsh-priydarshi-5646/Authentication-with-JWT_and_Session_Cookie-Practice?style=social)](https://github.com/adarsh-priydarshi-5646/Authentication-with-JWT_and_Session_Cookie-Practice)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

</div>

## 🚀 Live Demo

- **🌐 Frontend**: [https://authentication-with-jwt-and-session.vercel.app](https://authentication-with-jwt-and-session.vercel.app)
- **⚡ Backend API**: [https://authentication-with-jwt-and-session.onrender.com](https://authentication-with-jwt-and-session.onrender.com)

## 🛠️ Tech Stack

<div align="center">

### Backend Technologies
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)

### Frontend Technologies
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

### Tools & Deployment
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)

</div>

## ✨ Features

### 🔐 **Authentication & Security**
- ✅ **User Registration & Login** - Secure user authentication system
- ✅ **GitHub OAuth Integration** - Social login with GitHub
- ✅ **JWT Token Authentication** - Stateless authentication with JSON Web Tokens
- ✅ **HTTP-Only Cookies** - XSS protection with secure cookie storage
- ✅ **Password Hashing** - Bcrypt encryption for password security
- ✅ **Rate Limiting** - Brute force attack protection

### 👤 **User Management**
- ✅ **User Profile Dashboard** - Beautiful profile display with user information
- ✅ **Avatar Support** - Profile pictures from GitHub OAuth
- ✅ **Provider Detection** - Shows login method (Email/GitHub)
- ✅ **Account Information** - Join date, user ID, and account details

### 🛡️ **Security Features**
- ✅ **Input Validation** - Zod schema validation for all requests
- ✅ **CORS Protection** - Configured cross-origin resource sharing
- ✅ **Environment Variables** - Secure configuration management
- ✅ **Error Handling** - Comprehensive error management

### 🎨 **User Experience**
- ✅ **Modern UI Design** - Beautiful, responsive interface
- ✅ **Loading States** - User feedback during operations
- ✅ **Error Messages** - Clear, helpful error notifications
- ✅ **Mobile Responsive** - Works perfectly on all devices

## 📁 Project Structure

```
📦 auth-practice/
├── 🔧 backend/
│   ├── 📂 config/
│   │   ├── db.config.js              # Database configuration
│   │   └── passport.config.js        # GitHub OAuth setup
│   ├── 📂 controllers/
│   │   ├── authController.js         # Authentication logic
│   │   └── userController.js         # User management & profile
│   ├── 📂 middlewares/
│   │   ├── authMiddleware.js         # JWT verification
│   │   ├── rateLimiter.js           # Rate limiting
│   │   └── validateMiddleware.js     # Input validation
│   ├── 📂 routes/
│   │   ├── authRoute.js             # Auth endpoints
│   │   └── userRoute.js             # User endpoints
│   ├── 📂 validators/
│   │   └── auth.validators.js        # Zod validation schemas
│   ├── 📂 prisma/
│   │   └── schema.prisma            # Database schema
│   └── 📄 server.js                 # Main server file
│
└── 🎨 frontend/
    ├── 📂 src/
    │   ├── 📂 pages/
    │   │   ├── Login.jsx            # Login page
    │   │   ├── SignUp.jsx           # Registration page
    │   │   ├── Dashboard.jsx        # User profile dashboard
    │   │   └── TestConnection.jsx   # API testing (dev only)
    │   ├── 📂 services/
    │   │   └── api.js               # API service layer
    │   └── 📄 App.jsx               # Main app component
    └── 📄 index.html                # Entry point
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- PostgreSQL database
- GitHub OAuth App (for social login)

### 1️⃣ Clone Repository
```bash
git clone https://github.com/adarsh-priydarshi-5646/Authentication-with-JWT_and_Session_Cookie-Practice.git
cd auth-practice
```

### 2️⃣ Backend Setup
```bash
cd backend
npm install

# Setup environment variables
cp .env.example .env
# Edit .env with your database URL, JWT secret, etc.

# Run database migrations
npx prisma migrate dev
npx prisma generate

# Start backend server
npm run dev
```

### 3️⃣ Frontend Setup
```bash
cd frontend
npm install

# Setup environment variables
cp .env.example .env
# Edit .env with your backend URL

# Start frontend server
npm run dev
```

### 4️⃣ Access Application
- **Frontend**: http://localhost:5173
- **Backend**: http://localhost:8080
- **API Health**: http://localhost:8080/health

## 🔧 Environment Variables

### Backend (.env)
```env
# Server Configuration
PORT=8080
NODE_ENV=development
CLIENT_ORIGIN=http://localhost:5173

# Database
DATABASE_URL="postgresql://username:password@localhost:5432/auth_db"
DIRECT_URL="postgresql://username:password@localhost:5432/auth_db"

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key
JWT_EXPIRES_IN=7d
SESSION_SECRET=your_session_secret_key

# GitHub OAuth
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
GITHUB_CALLBACK_URL=http://localhost:8080/auth/github/callback
```

### Frontend (.env)
```env
VITE_API_URL=http://localhost:8080
```

## 📚 API Documentation

### Authentication Endpoints

#### Register User
```http
POST /auth/signup
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "SecurePass123!"
}
```

#### Login User
```http
POST /auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "SecurePass123!"
}
```

#### Get User Profile
```http
GET /users/profile
Cookie: token=jwt_token_here
```

#### Logout User
```http
POST /auth/logout
Cookie: token=jwt_token_here
```

#### GitHub OAuth
```http
GET /auth/github
# Redirects to GitHub for authentication
```

## 🛡️ Security Features

### Password Security
- **Bcrypt Hashing**: Passwords hashed with salt rounds of 10
- **Strong Password Policy**: Enforced via Zod validation
- **No Plain Text Storage**: Passwords never stored in plain text

### JWT Security
- **HTTP-Only Cookies**: Prevents XSS attacks
- **Secure Flag**: HTTPS-only in production
- **SameSite Policy**: CSRF protection
- **Configurable Expiration**: Default 7 days

### API Security
- **Rate Limiting**: 20 requests per 15 minutes for auth endpoints
- **Input Validation**: Zod schema validation for all inputs
- **CORS Protection**: Configured allowed origins
- **Error Handling**: No sensitive data in error responses

## 🎨 UI/UX Features

### Modern Design
- **Gradient Backgrounds**: Beautiful visual appeal
- **Responsive Layout**: Works on all screen sizes
- **Loading States**: User feedback during operations
- **Error Handling**: Clear, helpful error messages

### User Experience
- **Intuitive Navigation**: Easy-to-use interface
- **Profile Dashboard**: Complete user information display
- **Avatar Support**: GitHub profile pictures
- **Provider Indicators**: Shows login method (Email/GitHub)

## 🚀 Deployment

### Frontend (Vercel)
1. Connect GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push

### Backend (Render)
1. Connect GitHub repository to Render
2. Set environment variables in Render dashboard
3. Configure build and start commands
4. Deploy automatically on push

### Database (Supabase/PlanetScale)
1. Create PostgreSQL database
2. Get connection string
3. Run migrations: `npx prisma migrate deploy`

## 🧪 Testing

### Manual Testing
- Visit `/test` route (development only)
- Test all authentication flows
- Verify profile data display
- Check error handling

### API Testing
```bash
# Health check
curl http://localhost:8080/health

# Test signup
curl -X POST http://localhost:8080/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","password":"Test@123456"}'
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Adarsh Priydarshi**

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/adarsh-priydarshi-5646)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/adarsh-p1/)

## 🙏 Acknowledgments

- **JWT.io** - For JWT token debugging
- **Prisma** - For excellent ORM documentation
- **React** - For the amazing frontend framework
- **Express.js** - For the robust backend framework

## 📈 Project Stats

![GitHub repo size](https://img.shields.io/github/repo-size/adarsh-priydarshi-5646/Authentication-with-JWT_and_Session_Cookie-Practice)
![GitHub language count](https://img.shields.io/github/languages/count/adarsh-priydarshi-5646/Authentication-with-JWT_and_Session_Cookie-Practice)
![GitHub top language](https://img.shields.io/github/languages/top/adarsh-priydarshi-5646/Authentication-with-JWT_and_Session_Cookie-Practice)

---

<div align="center">

![Footer Banner](https://capsule-render.vercel.app/api?type=waving&color=667eea&height=120&section=footer&text=Thank%20You!&fontSize=30&fontColor=ffffff&animation=fadeIn)

**⭐ Star this repository if you found it helpful!**

<p>
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&pause=1000&color=667EEA&center=true&vCenter=true&width=300&lines=Made+with+❤️;By+Adarsh+Priydarshi;Happy+Coding!+🚀" alt="Footer Typing SVG" />
</p>

[![GitHub](https://img.shields.io/badge/Follow-adarsh--priydarshi--5646-blue?style=social&logo=github)](https://github.com/adarsh-priydarshi-5646)

</div>
