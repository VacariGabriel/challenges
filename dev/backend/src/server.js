const express = require('express');
const { unathorizedRoutes, authorizedRoutes } = require('./routes');
const listenEvent = require('./services/socket');
const authMiddleware = require('./middlewares/auth');
require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

const app = express();

app.use(express.json());
app.use(unathorizedRoutes);
app.use('/authorized', authMiddleware, authorizedRoutes);

if (process.env.NODE_ENV !== 'test') {
  listenEvent();
  app.listen(process.env.PORT || 3333);
}

module.exports = app;
