const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateToken = (login) => {
  return jwt.sign({ login }, process.env.SECRET, {
    expiresIn: 300,
  }); // 05 - minutes
};

const decodeToken = (token) => {
  const parts = token.split(' ');
  const login = jwt.verify(parts[1], process.env.SECRET, (err, decoded) => {
    return decoded.login;
  });

  return login;
};

module.exports = { generateToken, decodeToken };
