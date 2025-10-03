# Authentication with JWT and Session Cookie Practice

A Node.js/Express backend application implementing secure authentication using JWT tokens and HTTP-only cookies with Prisma ORM and MySQL database.

## Features

- **User Registration & Login** - Secure user authentication system
- **JWT Token Authentication** - JSON Web Token based authentication
- **HTTP-Only Cookies** - Secure session management with HTTP-only cookies
- **Password Hashing** - Bcrypt password encryption
- **Input Validation** - Zod schema validation for request data
- **Rate Limiting** - Protection against brute force attacks
- **CORS Support** - Cross-origin resource sharing enabled
- **Prisma ORM** - Type-safe database operations with MySQL

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js v5
- **Database:** MySQL
- **ORM:** Prisma
- **Authentication:** JWT (jsonwebtoken)
- **Password Hashing:** Bcrypt
- **Validation:** Zod
- **Security:** Helmet, CORS, Express Rate Limit
- **Development:** Nodemon

## Project Structure

```
backend/
├── config/
│   └── db.config.js          # Database configuration
├── controllers/
│   ├── authController.js     # Authentication logic
│   └── userController.js     # User management logic
├── middlewares/
│   ├── authMiddleware.js     # JWT verification middleware
│   ├── rateLimiter.js        # Rate limiting configuration
│   └── validateMiddleware.js # Request validation middleware
├── prisma/
│   └── schema.prisma         # Database schema
├── routes/
│   ├── authRoute.js          # Authentication routes
│   └── userRoute.js          # User routes
├── validators/
│   ├── auth.validators.js    # Auth validation schemas
│   └── user.validators.js    # User validation schemas
├── .env                      # Environment variables
├── .gitignore
├── package.json
└── server.js                 # Application entry point
```

## Prerequisites

- Node.js (v14 or higher)
- MySQL database
- npm or yarn

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd auth-practice
   ```

2. **Install dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the `backend` directory:
   ```env
   # Database
   DATABASE_URL="mysql://user:password@localhost:3306/database_name"
   
   # JWT
   JWT_SECRET="your-secret-key"
   JWT_EXPIRES_IN="7d"
   
   # Server
   PORT=8080
   NODE_ENV="development"
   
   # CORS
   CLIENT_ORIGIN="http://localhost:3000"
   ```

4. **Set up the database**
   ```bash
   npx prisma migrate dev --name init
   npx prisma generate
   ```

## Running the Application

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The server will start on `http://localhost:8080` (or your configured PORT).

## API Endpoints

### Authentication Routes (`/auth`)

#### Sign Up
- **POST** `/auth/signup`
- **Body:**
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "securePassword123"
  }
  ```
- **Response:** `201 Created`

#### Login
- **POST** `/auth/login`
- **Body:**
  ```json
  {
    "email": "john@example.com",
    "password": "securePassword123"
  }
  ```
- **Response:** `200 OK` with JWT token in cookie and response body

#### Logout
- **POST** `/auth/logout`
- **Headers:** Requires authentication cookie
- **Response:** `200 OK`

### User Routes (`/users`)
Protected routes requiring authentication (implementation details in userRoute.js)

## Security Features

1. **Password Security**
   - Passwords are hashed using bcrypt with salt rounds of 10
   - Plain text passwords are never stored

2. **JWT Token Security**
   - Tokens are signed with a secret key
   - Configurable expiration time
   - Stored in HTTP-only cookies to prevent XSS attacks

3. **Cookie Security**
   - HTTP-only flag prevents JavaScript access
   - Secure flag for HTTPS in production
   - SameSite strict policy prevents CSRF attacks
   - 7-day expiration

4. **Rate Limiting**
   - Protects against brute force attacks
   - Applied to authentication endpoints

5. **Input Validation**
   - Zod schema validation for all requests
   - Prevents invalid or malicious data

6. **CORS Configuration**
   - Configured to allow specific origins
   - Credentials support enabled

## Database Schema

```prisma
model User {
  id       Int    @id @default(autoincrement())
  name     String
  email    String @unique
  password String
}
```

## Development

### Available Scripts

- `npm start` - Start the production server
- `npm run dev` - Start the development server with nodemon

### Adding New Routes

1. Create controller in `controllers/`
2. Create validator schema in `validators/`
3. Create route in `routes/`
4. Register route in `server.js`

## Error Handling

The application includes comprehensive error handling:
- 400: Bad Request (validation errors)
- 401: Unauthorized (invalid credentials)
- 404: Not Found (user not found)
- 409: Conflict (user already exists)
- 500: Internal Server Error

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

ISC

## Author

Adarsh Priydarshi

---

**Note:** This is a practice project for learning authentication implementation with JWT and session cookies. For production use, consider additional security measures and thorough testing.
