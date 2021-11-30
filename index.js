const express = require('express');
const cors = require('cors');
const app = express();

const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: '*', //アクセス許可するオリジン
    credentials: true, //レスポンスヘッダーにAccess-Control-Allow-Credentials追加
    optionsSuccessStatus: 200, //レスポンスstatusを200に設定
  })
);
app.get('/', (req, res) => res.send('Hello World!!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
