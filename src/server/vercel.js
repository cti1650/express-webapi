'use strict';
const app = require('../app');
const router = require('../router/index');

app.use('/api/', router);

module.exports = app;