'use strict';
const app = require('../app');
const router = require('../router/index');

app.use('/api/', router);  // path must route to lambda

module.exports = app;