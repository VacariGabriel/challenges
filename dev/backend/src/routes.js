const { Router } = require('express');
const {
  create,
  getAll,
  deleteHeroi,
  update,
} = require('./controller/heroisController');

const { login } = require('./controller/authController');

const unathorizedRoutes = Router();
const authorizedRoutes = Router();

authorizedRoutes.post('/herois', create);
authorizedRoutes.get('/herois', getAll);
authorizedRoutes.delete('/herois', deleteHeroi);
authorizedRoutes.put('/herois', update);

unathorizedRoutes.post('/login', login);

module.exports = {
  unathorizedRoutes,
  authorizedRoutes,
};
