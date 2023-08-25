"use strict";
const functions = require("@google-cloud/functions-framework");

const app = require("../../src/server/cloudFunctions");

functions.http("expressServer", app);

functions.http("function", app);

module.exports.expressServer = app

module.exports.function = app