'use strict';
const serverless = require('serverless-http');

const app = require('../../src/server/netlify');

module.exports = app;
module.exports.handler = serverless(app);