"use strict";
const app = require("../app");
const router = require("../router/index");
const config = require("../context/config");

app.use(config.endpoint, router);

module.exports = app;