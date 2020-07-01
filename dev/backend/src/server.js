const express = require('express');
const routes = require('./routes');
require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

const app = express();

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333);

module.exports = app;
