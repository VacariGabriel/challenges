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

authorizedRoutes.get('/heroes', getAll);
authorizedRoutes.delete('/heroes', deleteHeroi);
authorizedRoutes.put('/heroes', update);

authorizedRoutes.get('/historic', showHistoric);

unathorizedRoutes.post('/hero', create);
unathorizedRoutes.post('/login', login);

module.exports = {
  unathorizedRoutes,
  authorizedRoutes,
};
