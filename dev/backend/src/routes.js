const { Router } = require('express');
const {
  create,
  getAll,
  deleteHeroi,
  update,
} = require('./controller/heroisController');

const login = require('./controller/authController');

const routes = Router();

routes.post('/herois', create);
routes.get('/herois', getAll);
routes.delete('/herois', deleteHeroi);
routes.put('/herois', update);

routes.post('/login', login);

module.exports = routes;
