"use strict";
const functions = require("@google-cloud/functions-framework");

const app = require("../../src/server/cloudFunctions");

functions.http("function", app);

module.exports.function = app