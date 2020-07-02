const bcrypt = require('bcryptjs');
const knex = require('../database/connection');
const generateToken = require('../utils/token');

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

      const token = generateToken(result[0].login);

      return response.status(200).json({
        message: 'Sucesso',
        token,
      });
    });
};

module.exports = login;
