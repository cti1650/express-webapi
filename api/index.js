"use strict";

if (!process.env.DEPLOY_SERVER) {
  require("dotenv").config();
}

const serverless = require("serverless-http");

const deployServer = process.env.DEPLOY_SERVER?.toLowerCase();
const vercelFlag =
  process.env.VERCEL_ENV === "production" || deployServer === "vercel";
const netlifyFlag = process.env.NETLIFY_DEV !== undefined || deployServer === "netlify";
const cloudFunctionsFlag =
  process.env.PROJECT_ID || deployServer === "cloudfunctions";

let app = null;

console.log(process.env);

if (vercelFlag) {
  app = require("../src/server/vercel");
  module.exports = app;
  return;
}

if (netlifyFlag) {
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
