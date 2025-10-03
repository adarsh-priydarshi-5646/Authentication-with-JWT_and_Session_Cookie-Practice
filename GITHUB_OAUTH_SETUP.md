# GitHub OAuth Setup Guide

## Overview
GitHub OAuth login has been successfully integrated into your authentication system. Users can now sign up and log in using their GitHub accounts.

## Setup Instructions

### 1. Create a GitHub OAuth App

1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Click on **"New OAuth App"**
3. Fill in the application details:
   - **Application name**: Your app name (e.g., "Auth Practice App")
   - **Homepage URL**: `http://localhost:5174` (or your frontend URL)
   - **Authorization callback URL**: `http://localhost:8080/auth/github/callback`
4. Click **"Register application"**
5. You'll receive a **Client ID** and can generate a **Client Secret**

### 2. Configure Environment Variables

Update your `.env` file in the backend directory with the following:

```env
# GitHub OAuth
GITHUB_CLIENT_ID=your_github_client_id_here
GITHUB_CLIENT_SECRET=your_github_client_secret_here
GITHUB_CALLBACK_URL=http://localhost:8080/auth/github/callback
SESSION_SECRET=your_random_session_secret_here
```

**Important**: 
- Replace `your_github_client_id_here` with your actual GitHub Client ID
- Replace `your_github_client_secret_here` with your actual GitHub Client Secret
- Generate a strong random string for `SESSION_SECRET` (e.g., use `openssl rand -base64 32`)

### 3. Database Schema

The Prisma schema already includes the necessary fields for GitHub OAuth:
- `githubId`: Stores the GitHub user ID
- `avatar`: Stores the user's GitHub profile picture URL
- `provider`: Tracks the authentication provider (local/github)
- `password`: Made optional to support OAuth users

If you haven't run migrations yet, run:
```bash
cd backend
npx prisma migrate dev
```

## How It Works

### Backend Flow

1. **User clicks "Continue with GitHub"** → Redirects to `/auth/github`
2. **GitHub authentication** → User authorizes the app on GitHub
3. **Callback** → GitHub redirects to `/auth/github/callback` with user data
4. **User creation/update**:
   - If user exists with GitHub ID → Log them in
   - If email exists but no GitHub ID → Link GitHub to existing account
   - If new user → Create new account with GitHub data
5. **JWT token generation** → Token stored in HTTP-only cookie
6. **Redirect to dashboard** → User is logged in

### Frontend Flow

- Both Login and SignUp pages have "Continue with GitHub" buttons
- Clicking the button redirects to the backend OAuth endpoint
- After successful authentication, user is redirected to `/dashboard`

## Features Implemented

✅ **Backend**:
- Passport.js with GitHub Strategy configured
- Session management for OAuth flow
- JWT token generation after successful OAuth
- User creation and account linking logic
- Secure cookie-based authentication

✅ **Frontend**:
- GitHub login button on Login page
- GitHub signup button on SignUp page
- Styled GitHub buttons with icon
- OR divider for visual separation

## Security Considerations

1. **HTTP-only cookies**: JWT tokens are stored in HTTP-only cookies to prevent XSS attacks
2. **Secure flag**: Cookies are marked secure in production (HTTPS only)
3. **SameSite**: Cookies use `strict` SameSite policy
4. **Session secret**: Strong random secret for session encryption
5. **Environment variables**: Sensitive credentials stored in `.env` file

## Testing

### Local Testing

1. Start the backend server:
   ```bash
   cd backend
   npm run dev
   ```

2. Start the frontend:
   ```bash
   cd frontend
   npm run dev
   ```

3. Navigate to `http://localhost:5174/login` or `/signup`
4. Click "Continue with GitHub"
5. Authorize the app on GitHub
6. You should be redirected to the dashboard

### Production Deployment

When deploying to production, update:

1. **GitHub OAuth App Settings**:
   - Homepage URL: Your production frontend URL
   - Callback URL: Your production backend URL + `/auth/github/callback`

2. **Environment Variables**:
   - Update `CLIENT_ORIGIN` to your production frontend URL
   - Update `GITHUB_CALLBACK_URL` to your production callback URL
   - Ensure `NODE_ENV=production`

## Troubleshooting

### Common Issues

1. **"Redirect URI mismatch"**
   - Ensure the callback URL in GitHub OAuth app matches exactly with your backend URL
   - Check that `GITHUB_CALLBACK_URL` in `.env` is correct

2. **Session errors**
   - Ensure `SESSION_SECRET` is set in `.env`
   - Check that `express-session` is properly configured

3. **CORS errors**
   - Verify `CLIENT_ORIGIN` in `.env` matches your frontend URL
   - Ensure `credentials: true` is set in CORS configuration

4. **User not created**
   - Check database connection
   - Verify Prisma schema includes all required fields
   - Check backend logs for errors

## API Endpoints

### GitHub OAuth Endpoints

- `GET /auth/github` - Initiates GitHub OAuth flow
- `GET /auth/github/callback` - GitHub OAuth callback handler

### Existing Auth Endpoints

- `POST /auth/signup` - Traditional email/password signup
- `POST /auth/login` - Traditional email/password login
- `POST /auth/logout` - Logout (clears JWT cookie)

## Next Steps

Consider implementing:

1. **Additional OAuth providers** (Google, Facebook, etc.)
2. **Profile page** showing user's GitHub avatar and info
3. **Account linking** UI for users to connect multiple providers
4. **Email verification** for local accounts
5. **Password reset** functionality

## Support

For issues or questions, refer to:
- [Passport.js Documentation](http://www.passportjs.org/)
- [GitHub OAuth Documentation](https://docs.github.com/en/developers/apps/building-oauth-apps)
- [Express Session Documentation](https://github.com/expressjs/session)
