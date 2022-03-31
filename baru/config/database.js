module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'ec2-52-3-60-53.compute-1.amazonaws.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'd48kffkn4mtfda'),
      user: env('DATABASE_USERNAME', 'cxsitijtqbogiy'),
      password: env('DATABASE_PASSWORD', 'c50a8f4ca2edad3fa820104212a1eaae3ede017888f6296400ae4d3bd1376e40'),
      ssl: { rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false)},
    },
  },
});