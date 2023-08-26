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

const port = process.env.PORT || 3000;

const app = require("../src/app");
const router = require("../src/router/index");
const config = require("../src/context/config");

app.use(config.endpoint, router);

if (vercelFlag) {
  module.exports = app;
} else if (netlifyFlag) {
  const serverless = require("serverless-http");
  module.exports = app;
  module.exports.handler = serverless(app);
} else if (cloudFunctionsFlag) {
  const functions = require("@google-cloud/functions-framework");
  functions.http("handler", app);
  module.exports.handler = app;
} else {
  app.listen(port, () =>
    console.log(
      `Local app listening on http://localhost:${port}${config.endpoint}`
    )
  );
}
