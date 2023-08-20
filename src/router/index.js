const express = require("express");

const router = express.Router();

router.get("/", (_req, res) => {
  res.header("Content-Type", "application/json; charset=utf-8");
  res.send('{ "message": "hello world!" }');
});
router.get("/sample", (_req, res) => res.send("Hello World!!"));

router.get("/robots.txt", (_req, res) => {
  res.type("text/plain");
  res.send("User-agent: *\nDisallow: /");
});

router.get("/health", (_req, res) => {
  res.status(OK).json({ status: OK, text: "Health check ok" });
});

module.exports = router;
