# Frontend Setup Guide

## Authentication Frontend with React + Vite

This frontend application provides sign up and login functionality with backend integration.

## Features

- ✅ Modern React application with Vite
- ✅ Sign Up page with form validation
- ✅ Login page with authentication
- ✅ Dashboard with logout functionality
- ✅ Beautiful gradient UI design
- ✅ Backend API integration with Axios
- ✅ React Router for navigation
- ✅ HTTP-only cookie support

## Installation

```bash
npm install
```

## Environment Configuration

Create a `.env` file in the frontend directory (already created):

```
VITE_API_URL=http://localhost:8080
```

## Running the Application

```bash
npm run dev
```

The application will start on `http://localhost:5173` (default Vite port)

## Available Routes

- `/` - Redirects to login
- `/signup` - User registration page
- `/login` - User login page
- `/dashboard` - Protected dashboard (after login)

## Backend Integration

The frontend connects to the backend API endpoints:

- `POST /auth/signup` - Register new user
- `POST /auth/login` - Login user
- `POST /auth/logout` - Logout user

Make sure your backend server is running on port 8080 before testing the frontend.

## Project Structure

```
frontend/
├── src/
│   ├── pages/
│   │   ├── SignUp.jsx       # Sign up component
│   │   ├── Login.jsx        # Login component
│   │   ├── Dashboard.jsx    # Dashboard component
│   │   ├── Auth.css         # Auth pages styling
│   │   └── Dashboard.css    # Dashboard styling
│   ├── services/
│   │   └── api.js           # API service with axios
│   ├── App.jsx              # Main app with routing
│   ├── index.css            # Global styles
│   └── main.jsx             # Entry point
├── .env                     # Environment variables
└── package.json
```

## Testing the Flow

1. Start the backend server (port 8080)
2. Start the frontend dev server (port 5173)
3. Navigate to `http://localhost:5173`
4. Click "Sign up" to create a new account
5. After successful registration, login with your credentials
6. You'll be redirected to the dashboard
7. Click "Log Out" to logout

## Notes

- The backend uses HTTP-only cookies for session management
- JWT tokens are also returned in the response for additional flexibility
- CORS is configured to allow credentials from the frontend
