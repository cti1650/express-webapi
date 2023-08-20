const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

app.use(
  cors({
    origin: "*", //アクセス許可するオリジン
    credentials: true, //レスポンスヘッダーにAccess-Control-Allow-Credentials追加
    optionsSuccessStatus: 200, //レスポンスstatusを200に設定
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

module.exports = app;
