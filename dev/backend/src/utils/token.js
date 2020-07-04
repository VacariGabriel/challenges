const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateToken = (login) => {
  return jwt.sign({ login }, process.env.SECRET, {
    expiresIn: 10000,
  }); // 05 - minutes
};

const decodeToken = (token) => {
  console.log(token);
  const parts = token.split(' ');
  console.log(parts);
  const login = jwt.verify(parts[1], process.env.SECRET, (err, decoded) => {
    return decoded.login;
  });

  return login;
};

module.exports = { generateToken, decodeToken };
