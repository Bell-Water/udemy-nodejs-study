const path = require("path");

const express = require("express");

const router = express.Router();

// use와 달리 get, post 등을 사용하면 해당 url과 매칭되는 것만 연결됨
router.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "views", "shop.html")); // 리눅스와 윈도우에서 작동하는 방식으로 경로 구성
});

module.exports = router;
