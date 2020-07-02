const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateToken = (login) => {
  return jwt.sign({ login }, process.env.SECRET, {
    expiresIn: 300,
  }); // 05 - minutes
};

module.exports = generateToken;
