"use strict";

require("dotenv").config();

const deployServer = process.env.DEPLOY_SERVER?.toLowerCase();
const vercelFlag =
  process.env.VERCEL_ENV === "production" || deployServer === "vercel";
const netlifyFlag = process.env.NETLIFY === true || deployServer === "netlify";
const cloudFunctionsFlag =
  process.env.PROJECT_ID || deployServer === "cloudfunctions";

let app = null;

if (vercelFlag) {
  app = require("../src/server/vercel");
  module.exports = app;
  return;
}

if (netlifyFlag) {
  const serverless = require("serverless-http");
  app = require("../src/server/netlify");

  module.exports = app;
  module.exports.handler = serverless(app);
  return;
}

if (cloudFunctionsFlag) {
  const functions = require("@google-cloud/functions-framework");
  app = require("../src/server/cloudFunctions");

  functions.http("expressServer", app);
  functions.http("function", app);

  module.exports.expressServer = app;
  module.exports.function = app;
  return;
}

app = require("../src/server/local");
module.exports = app;
