// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite'
    },
    migrations: {
      directory: "./src/database/migrations"
    },
    useNullAsDefault: true,
  },

  test: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/test.sqlite'
    },
    migrations: {
      directory: "./src/database/migrations"
    },
    useNullAsDefault: true,
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'ec2-52-6-143-153.compute-1.amazonaws.com',
    connection: {
      database: 'postgres://iufaiizomhvfpv:3853c32a15338034703e2a0e0dd2403ee63df909c1698f49866fc07333f4513a@ec2-52-6-143-153.compute-1.amazonaws.com:5432/dam2u1683ad1qp',
      user: 'iufaiizomhvfpv',
      password: '3853c32a15338034703e2a0e0dd2403ee63df909c1698f49866fc07333f4513a'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
