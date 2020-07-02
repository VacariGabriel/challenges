const { Router } = require('express');
const {
  create,
  getAll,
  deleteHeroi,
  update,
} = require('./controller/heroesController');

const login = require('./controller/authController');

const showHistoric = require('./controller/historicController');

const unathorizedRoutes = Router();
const authorizedRoutes = Router();

authorizedRoutes.post('/herois', create);
authorizedRoutes.get('/herois', getAll);
authorizedRoutes.delete('/herois', deleteHeroi);
authorizedRoutes.put('/herois', update);

authorizedRoutes.get('/historico', showHistoric);

unathorizedRoutes.post('/login', login);

module.exports = {
  unathorizedRoutes,
  authorizedRoutes,
};
