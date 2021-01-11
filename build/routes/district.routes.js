"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var router = (0, _express.Router)();
router.get("/disctrict", function (req, res) {
  res.json("Get disctricts");
});
var _default = router;
exports["default"] = _default;