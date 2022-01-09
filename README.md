# 導入

## git 初期設定

```
npm init
```

## .gitignore 作成

```
/node_modules
```

## Express インストール

```
npm install --save express
```

## Express CORS 対応

```
npm install cors
```

# 実行方法

```
node src/index.js
```

# 動作確認

[http://localhost:3000/](http://localhost:3000/)

## サンプルコード

<a title="Gitpod" href="https://gitpod.io/#https://github.com/cti1650/express_webapi" rel="nofollow noreferrer noopener" target="_blank" class="btn btn-primary">Gitpodでサンプルを実行</a>

### 本番環境

[https://express-webapi-cti-tl.herokuapp.com/](https://express-webapi-cti-tl.herokuapp.com/)

### ソースコード

```
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
```

# 参考

- [express で CORS エラーが起きたら cors で解決しよう](https://zenn.dev/luvmini511/articles/d8b2322e95ff40)

- [Express 公式ドキュメント](https://expressjs.com/)

- [cors モジュール](https://www.npmjs.com/package/cors)

- [GitHub Pages をローカルで動作確認する](https://zenn.dev/snowcait/articles/9420b3ef2a5edcea2a07)

- [Node.js(Express) 事始め ＆ Heroku へデプロイまでのメモ - Qiita](https://qiita.com/hkusu/items/e46de8c446840c50aefe)

