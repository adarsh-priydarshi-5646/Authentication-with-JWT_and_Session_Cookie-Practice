# 🚀 Complete Deployment Guide

## 📋 Environment Variables Configuration

### 🔧 Backend (Render) Environment Variables
```bash
# Database Configuration
DATABASE_URL=postgresql://postgres.fokkrjuacyggtlbxtqpk:Adarshpriydarshi@aws-1-ap-southeast-1.pooler.supabase.com:6543/postgres?pgbouncer=true
DIRECT_URL=postgresql://postgres.fokkrjuacyggtlbxtqpk:Adarshpriydarshi@aws-1-ap-southeast-1.pooler.supabase.com:5432/postgres

# Server Configuration
PORT=8080
NODE_ENV=production
JWT_SECRET=7c925fde8c35f997b007e98560dfc4cc
JWT_EXPIRES_IN=7d
CLIENT_ORIGIN=https://authentication-with-jwt-and-session.vercel.app

# GitHub OAuth Configuration
GITHUB_CLIENT_ID=Ov23liBfCfuBGvWApXMX
GITHUB_CLIENT_SECRET=d720a21032fbbe2627e01aa6a903b23a56aa734e
GITHUB_CALLBACK_URL=https://authentication-with-jwt-and-session.onrender.com/auth/github/callback
SESSION_SECRET=github_oauth_session_secret_key_12345
```

### 🌐 Frontend (Vercel) Environment Variables
```bash
VITE_API_URL=https://authentication-with-jwt-and-session.onrender.com
```

### 🐙 GitHub OAuth App Configuration
**Authorization callback URLs:**
```
http://localhost:8080/auth/github/callback
https://authentication-with-jwt-and-session.onrender.com/auth/github/callback
```

**Homepage URL:**
```
https://authentication-with-jwt-and-session.vercel.app
```

## 🔄 Deployment Steps

### Step 1: Backend Deployment (Render)
1. Go to Render Dashboard → Your backend service
2. Navigate to **Environment** tab
3. Add all backend environment variables listed above
4. Save changes (auto-redeploys)

### Step 2: Frontend Deployment (Vercel)
1. Go to Vercel Dashboard → Your frontend project
2. Navigate to **Settings** → **Environment Variables**
3. Add: `VITE_API_URL=https://authentication-with-jwt-and-session.onrender.com`
4. Redeploy the project

### Step 3: GitHub OAuth App Setup
1. Go to GitHub → Settings → Developer settings → OAuth Apps
2. Select your app: "Authentication-Practice"
3. Update **Authorization callback URL** to include both:
   - `http://localhost:8080/auth/github/callback` (for local development)
   - `https://authentication-with-jwt-and-session.onrender.com/auth/github/callback` (for production)
4. Set **Homepage URL** to: `https://authentication-with-jwt-and-session.vercel.app`
5. Save changes

## ✅ Testing Checklist

### Local Development
- [ ] Backend running on http://localhost:8080
- [ ] Frontend running on http://localhost:5173
- [ ] Signup/Login working
- [ ] GitHub OAuth working
- [ ] Dashboard access working

### Production Deployment
- [ ] Backend health check: https://authentication-with-jwt-and-session.onrender.com/health
- [ ] Frontend accessible: https://authentication-with-jwt-and-session.vercel.app
- [ ] Signup/Login working on production
- [ ] GitHub OAuth working on production
- [ ] Dashboard access working on production

## 🔗 URLs

- **Frontend (Production)**: https://authentication-with-jwt-and-session.vercel.app
- **Backend (Production)**: https://authentication-with-jwt-and-session.onrender.com
- **Frontend (Local)**: http://localhost:5173
- **Backend (Local)**: http://localhost:8080

## 🛠️ Build Commands

### Backend (Render)
```bash
npm install && npx prisma generate && npx prisma migrate deploy
```

### Frontend (Vercel)
```bash
npm run build
```

## 🚨 Common Issues & Solutions

1. **"OAuth2Strategy requires a clientID option"**
   - Solution: Add GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET to Render environment variables

2. **"redirect_uri is not associated with this application"**
   - Solution: Add callback URL to GitHub OAuth App settings

3. **"Database connection error"**
   - Solution: Verify DATABASE_URL and DIRECT_URL in Render environment variables

4. **Frontend shows localhost URL in production**
   - Solution: Set VITE_API_URL in Vercel environment variables
