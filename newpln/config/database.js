module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'manny.db.elephantsql.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'uadknjqe'),
      user: env('DATABASE_USERNAME', 'uadknjqe'),
      password: env('DATABASE_PASSWORD', 'ZvCafHTY0J-MTbHwMguexdFYz1p3TfNY'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
