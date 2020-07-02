const path = require('path');

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite'),
    },
    migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
    },
    useNullAsDefault: true,
    seeds: {
      directory: path.resolve(__dirname, 'src', 'database', 'seeds'),
    },
  },

  test: {
    client: 'sqlite3',
    connection: ':memory:',
    useNullAsDefault: true,
    migrations: {
      directory: path.join(__dirname, 'src', 'database', 'migrations'),
    },
    seeds: {
      directory: path.join(__dirname, 'src', 'database', 'seeds'),
    },
  },
};
