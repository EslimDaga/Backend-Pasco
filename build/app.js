"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _package = _interopRequireDefault(require("../package.json"));

var _district = _interopRequireDefault(require("./routes/district.routes"));

var _auth = _interopRequireDefault(require("./routes/auth.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)(); //Settings

app.set("port", process.env.PORT || 4000);
app.set("pkg", _package.default); //Middleware

app.use((0, _morgan.default)("dev"));
app.use(_express.default.json()); //Routes

app.use("/api/district", _district.default);
app.use("/api/auth", _auth.default);
app.get("/", (req, res) => {
  res.json({
    name: app.get("pkg").name,
    author: app.get("pkg").author,
    description: app.get("pkg").description,
    version: app.get("pkg").version
  });
});
var _default = app;
exports.default = _default;