const knex = require('../database/connection');

const showHistoric = async (request, response) => {
  const historic = await knex('historic').select('*');

  if (!historic) {
    return response
      .status(200)
      .json({ message: 'Não temos histórico no momento' });
  }

  return response.status(200).json(historic);
};

module.exports = showHistoric;
