module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd12a7c8a8c1281e5c2d7bce579c5861d'),
  },
});
