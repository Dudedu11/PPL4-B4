module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3f9bb46898171ce49e20d07dbf457ca3'),
  },
});
