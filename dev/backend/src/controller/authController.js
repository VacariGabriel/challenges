const bcrypt = require('bcryptjs');
const knex = require('../database/connection');
const { generateToken } = require('../utils/token');

const authLogin = async (request, response) => {
  const { login, password } = request.body;

  if (!login || !password) {
    return response
      .status(400)
      .json({ message: 'Login e senha precisam ser preenchidos' });
  }

  knex('hero')
    .select('*')
    .where({ login })
    .then(async (result) => {
      if (!result.length) {
        return response.status(401).json({ message: 'Login inválido' });
      }

      const isValidPassword = await bcrypt.compare(
        password,
        result[0].password
      );

      if (!isValidPassword) {
        return response.status(401).json({ message: 'Senha inválida' });
      }

      const token = generateToken(result[0].login);

      return response.status(200).json({
        message: 'Login realizado com sucesso',
        token,
      });
    });
};

module.exports = authLogin;
