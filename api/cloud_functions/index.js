"use strict";
const functions = require("@google-cloud/functions-framework");

const app = require("../../src/server/cloudFunctions");

functions.http("express_server", app);
