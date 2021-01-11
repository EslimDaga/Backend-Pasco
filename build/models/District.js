"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var districtSchema = new _mongoose.Schema({
  name: String,
  region: String,
  province: String,
  latitude: Number,
  longitude: Number,
  altitude: Number,
  imageUrl: String
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)("District", districtSchema);

exports["default"] = _default;