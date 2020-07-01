const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const knex = require('../database/connection');
require('dotenv').config();

const login = async (request, response) => {
  const { login, password } = request.body;

  knex('herois')
    .select('*')
    .where({ login })
    .then(async (result) => {
      if (!result.length) {
        return response.status(401).json({ message: 'Login inválido' });
      }

      const isValidPassword = await bcrypt.compare(password, result[0].senha);

      if (!isValidPassword) {
        return response.status(401).json({ message: 'Senha inválida' });
      }

      const token = jwt.sign({ id: result[0].id }, process.env.SECRET);

      return response.status(200).json({
        message: 'Sucesso',
        token,
      });
    });
};

module.exports = login;
