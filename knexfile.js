// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: "test_knex",
      user: "postgres",
      password: "161121"
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`
    },
  
    seeds: {
      directory: `${__dirname}/src/database/seeds`
    }
  },
};
