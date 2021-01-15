"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signIn = exports.signUp = void 0;

var _User = _interopRequireDefault(require("../models/User"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../config"));

var _Role = _interopRequireDefault(require("../models/Role"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var signUp = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res) {
    var {
      username,
      email,
      password,
      roles
    } = req.body;
    var newUser = new _User.default({
      username,
      email,
      password: yield _User.default.encryptPassword(password)
    });

    if (roles) {
      var foundDoles = yield _Role.default.find({
        name: {
          $in: roles
        }
      });
      newUser.roles = foundDoles.map(role => role._id);
    } else {
      var role = yield _Role.default.findOne({
        name: "user"
      });
      newUser.roles = [role._id];
    }

    var savedUser = yield newUser.save();
    console.log(savedUser);

    var token = _jsonwebtoken.default.sign({
      id: savedUser._id
    }, _config.default.SECRET, {
      expiresIn: 86400 //24 hours

    });

    res.status(200).json({
      token
    });
  });

  return function signUp(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.signUp = signUp;

var signIn = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (req, res) {
    var userFound = yield _User.default.findOne({
      email: req.body.email
    }).populate("roles");
    if (!userFound) return res.json({
      message: "User not found"
    });
    var matchPassword = yield _User.default.comparePassword(req.body.password, userFound.password);
    if (!matchPassword) return res.status(401).json({
      token: null,
      message: "Invalid password"
    });

    var token = _jsonwebtoken.default.sign({
      id: userFound._id
    }, _config.default.SECRET, {
      expiresIn: 86400
    });

    res.json({
      token
    });
  });

  return function signIn(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.signIn = signIn;