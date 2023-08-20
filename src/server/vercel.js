'use strict';
const app = require('../../app');
const router = require('../../router/index');

app.use('/', router);

module.exports = app;