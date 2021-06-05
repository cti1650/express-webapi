const express = require('express');
const cors = require('cors');
const app = express();

app.use(
  cors({
    origin: '*', //アクセス許可するオリジン
    credentials: true, //レスポンスヘッダーにAccess-Control-Allow-Credentials追加
    optionsSuccessStatus: 200, //レスポンスstatusを200に設定
  })
);
app.get('/', (req, res) => res.send('Hello World!!'));

app.listen(3000, () => console.log('Listening on port 3000'));
