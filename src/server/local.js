'use strict';

const port = process.env.PORT || 3000;

const app = require('../app');
const router = require('../router/index');

app.use('/.netlify/functions/server', router);  // path must route to lambda

app.listen(port, () => console.log(`Local app listening on http://localhost:${port}`));