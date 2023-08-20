'use strict';

const port = process.env.PORT || 3000;

const app = require('../app');
const router = require('../router/index');

app.use('/api/', router);

app.listen(port, () => console.log(`Local app listening on http://localhost:${port}`));