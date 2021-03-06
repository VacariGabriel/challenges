const path = require('path');
require('dotenv').config();

module.exports = {
  prod: {
    client: 'sqlite3',
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_DATABASE,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    },
    migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
    },
    seeds: {
      directory: path.resolve(__dirname, 'src', 'database', 'seeds'),
    },
    useNullAsDefault: true,
  },

  test: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite'),
    },
    migrations: {
      directory: path.join(__dirname, 'src', 'database', 'migrations'),
    },
    seeds: {
      directory: path.join(__dirname, 'src', 'database', 'seeds'),
    },
    useNullAsDefault: true,
  },
};
