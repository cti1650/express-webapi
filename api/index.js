"use strict";

if (!process.env.DEPLOY_SERVER) {
  require("dotenv").config();
}

const deployServer = process.env.DEPLOY_SERVER?.toLowerCase();
const vercelFlag =
  process.env.VERCEL_ENV === "production" || deployServer === "vercel";
const netlifyFlag =
  process.env.NETLIFY_DEV !== undefined || deployServer === "netlify";
const cloudFunctionsFlag =
  process.env.PROJECT_ID || deployServer === "cloudfunctions";

let app = null;

if (vercelFlag) {
  app = require("../src/server/vercel");
  module.exports = app;
} else if (netlifyFlag) {
  const serverless = require("serverless-http");
  app = require("../src/server/netlify");

  module.exports = app;
  module.exports.handler = serverless(app);
} else if (cloudFunctionsFlag) {
  const functions = require("@google-cloud/functions-framework");
  app = require("../src/server/cloudFunctions");

  functions.http("handler", app);
  functions.http("function", app);

  module.exports.handler = app;
  module.exports.function = app;
} else {
  app = require("../src/server/local");
  module.exports = app;
}
