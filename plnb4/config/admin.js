module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3f0fca14e202b0c530a81b8923538e4d'),
  },
});
