const express = require('express');

const router = express.Router();

router.get("/", (req, res) => {
  res.header("Content-Type", "application/json; charset=utf-8");
  res.send('{ "message": "hello world!" }');
});
router.get("/sample", (req, res) => res.send("Hello World!!"));

module.exports = router
