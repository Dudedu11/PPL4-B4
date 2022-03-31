module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '345269cd70593811d3258472856324b1'),
  },
});
