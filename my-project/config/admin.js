module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3870fa89ff33e199534425709b205171'),
  },
});
