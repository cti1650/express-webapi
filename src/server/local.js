"use strict";

const port = process.env.PORT || 3000;

const app = require("../app");
const router = require("../router/index");
const config = require("../context/config");

app.use(config.endpoint, router);

app.listen(port, () =>
  console.log(
    `Local app listening on http://localhost:${port}${config.endpoint}`
  )
);
