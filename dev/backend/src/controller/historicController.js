const knex = require('../database/connection');

const showHistoric = (request, response) => {
  knex('historic')
    .select('*')
    .then((result) => {
      console.log(result);
    });
};

module.exports = showHistoric;
