const bcrypt = require('bcryptjs');
const knex = require('../database/connection');
const { decodeToken, destroyToken } = require('../utils/token');

const create = async (request, response) => {
  const { name, login, password, lat, lng, rank } = request.body;

  if (!name || !login || !password || !lat || !lng || !rank) {
    return response
      .status(400)
      .json({ message: 'Todos os campos devem ser preenchidos ' });
  }

  const hero = await knex('hero')
    .where({ login, name })
    .select('*')
    .then((hero) => {
      return hero;
    });

  if (hero.length) {
    return response.status(200).json({ message: 'Login ja existente' });
  }
  const passwordEncrypted = bcrypt.hashSync(password, 10);

  await knex('hero')
    .insert({
      name,
      login,
      password: passwordEncrypted,
      lat,
      lng,
      rank,
    })
    .then(() => {
      response.status(201).json({ message: 'Herói criado com sucesso' });
    })
    .catch(() =>
      response.status(400).json({ message: 'Erro ao criar usuário' })
    );
};

const getAll = async (request, response) => {
  await knex('hero')
    .select('*')
    .then((data) => {
      if (!data) {
        return response
          .status(200)
          .json({ message: 'Nenhum herói cadastrado ' });
      }

      const cleanData = data.map((hero) => {
        delete hero.login;
        delete hero.password;

        return hero;
      });

      return response.status(200).json(cleanData);
    })
    .catch(() => {
      return response
        .status(500)
        .json({ message: 'Desculpe! Estamos com problemas' });
    });
};

const deleteHeroi = async (request, response) => {
  const { id } = request.body;

  if (!id) {
    return response.status(400).json({ message: 'ID do herói é obrigatório ' });
  }

  const token = request.headers.authorization;
  const login = decodeToken(token);

  const result = await knex('hero')
    .where({ login })
    .select('id')
    .then((result) => {
      return result;
    });

  if (!result.length) {
    return response.status(400).json({ message: 'Herói não encontrado ' });
  }

  if (result[0].id !== id) {
    return response.status(400).json({
      message: 'Você não pode deletar um herói que não seja você mesmo',
    });
  }

  await knex('hero')
    .where({ id })
    .delete()
    .then(() => {
      return response
        .status(200)
        .json({ message: 'Herói deletado com sucesso' });
    })
    .catch(() => {
      return response
        .status(500)
        .json({ message: 'Desculpe! Estamos com problemas' });
    });
};

const update = async (request, response) => {
  const { id, name, lat, lng, rank } = request.body;

  knex('hero')
    .where({ id })
    .update({
      name,
      lat,
      lng,
      rank,
    })
    .then((result) => {
      if (result === 0) {
        return response.status(204).send();
      }

      return response
        .status(200)
        .json({ message: 'Herói atualizado com sucesso ' });
    })
    .catch(() => {
      return response
        .status(500)
        .json({ message: 'Desculpe! estamos com problemas' });
    });
};

module.exports = {
  create,
  getAll,
  deleteHeroi,
  update,
};
