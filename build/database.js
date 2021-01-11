"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_mongoose["default"].connect("mongodb+srv://edaga:daga2020@cluster0.qxixk.mongodb.net/<dbname>?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function (db) {
  return console.log("Database is connected");
})["catch"](function (error) {
  return console.error(error);
});