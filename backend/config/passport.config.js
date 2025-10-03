const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const prisma = require('./db.config');
const jwt = require('jsonwebtoken');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await prisma.user.findUnique({ where: { id } });
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: process.env.GITHUB_CALLBACK_URL,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // Check if user already exists
        let user = await prisma.user.findUnique({
          where: { githubId: profile.id },
        });

        if (user) {
          // User exists, return user
          return done(null, user);
        }

        // Check if email already exists with local provider
        const existingEmailUser = await prisma.user.findUnique({
          where: { email: profile.emails[0].value },
        });

        if (existingEmailUser) {
          // Update existing user with GitHub info
          user = await prisma.user.update({
            where: { id: existingEmailUser.id },
            data: {
              githubId: profile.id,
              avatar: profile.photos[0]?.value,
              provider: 'github',
            },
          });
          return done(null, user);
        }

        // Create new user
        user = await prisma.user.create({
          data: {
            name: profile.displayName || profile.username,
            email: profile.emails[0].value,
            githubId: profile.id,
            avatar: profile.photos[0]?.value,
            provider: 'github',
            password: null,
          },
        });

        return done(null, user);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

module.exports = passport;
