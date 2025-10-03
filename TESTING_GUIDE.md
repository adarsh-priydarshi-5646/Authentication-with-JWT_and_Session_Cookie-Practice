# 🧪 Testing Guide - Authentication System

## ✅ Current Status

- **Backend**: Running on `http://localhost:8080` ✓
- **Frontend**: Running on `http://localhost:5174` ✓
- **CORS**: Configured for port 5174 ✓

## 🔍 Step-by-Step Testing

### 1. Test Backend Connection

Visit: `http://localhost:5174/test`

Click "Test Connection" button to verify backend is reachable.

### 2. Test Sign Up

**URL**: `http://localhost:5174/signup`

**Important Password Requirements:**
- Minimum 8 characters
- At least one UPPERCASE letter (A-Z)
- At least one lowercase letter (a-z)  
- At least one number (0-9)
- At least one special character (!@#$%^&*)

**Example Valid Data:**
```
Name: Adarsh Priydarshi
Email: adarsh@example.com
Password: Test@123456
```

**What to Check:**
- ✅ Form shows password requirements below password field
- ✅ If validation fails, errors are displayed in a list
- ✅ On success, you see "User registered successfully" alert
- ✅ Automatically redirected to login page

### 3. Test Login

**URL**: `http://localhost:5174/login`

Use the credentials you just created:
```
Email: adarsh@example.com
Password: Test@123456
```

**What to Check:**
- ✅ On success, you see "Login successful" alert
- ✅ Redirected to dashboard
- ✅ Token stored in localStorage
- ✅ Cookie set in browser (check DevTools > Application > Cookies)

### 4. Test Dashboard

**URL**: `http://localhost:5174/dashboard`

**What to Check:**
- ✅ Welcome message displayed
- ✅ "Log Out" button works
- ✅ After logout, redirected to login page

## 🐛 Common Errors & Solutions

### Error 1: CORS Policy Error
```
Access to XMLHttpRequest blocked by CORS policy
```
**Solution**: 
- Check backend `.env` file has: `CLIENT_ORIGIN=http://localhost:5174`
- Restart backend server: `kill <PID>` then `node server.js`

### Error 2: Validation Errors
```
Password must contain at least one uppercase letter
```
**Solution**: Use a strong password like `Test@123456`

### Error 3: User Already Exists
```
User already exists, please login
```
**Solution**: Use a different email or login with existing credentials

### Error 4: Database Connection Error
```
PrismaClientInitializationError
```
**Solution**: 
- Check MySQL is running
- Verify `DATABASE_URL` in backend `.env`
- Run: `cd backend && npx prisma migrate dev`

## 📝 Browser Console Logs

Open DevTools (F12) > Console tab to see:
- Sign up request/response
- Login request/response
- Any error details

## 🔧 Quick Commands

**Restart Backend:**
```bash
cd backend
node server.js
```

**Restart Frontend:**
```bash
cd frontend
npm run dev
```

**Check Running Servers:**
```bash
lsof -i :8080  # Backend
lsof -i :5174  # Frontend
```

## ✨ Expected Flow

1. Visit `/signup` → Create account with strong password
2. See success message → Redirected to `/login`
3. Enter credentials → Login successful
4. Redirected to `/dashboard` → See welcome message
5. Click "Log Out" → Redirected to `/login`

## 📞 Need Help?

Check browser console (F12) for detailed error messages!
