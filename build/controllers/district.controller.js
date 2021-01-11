"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteDistrict = exports.updateDistrict = exports.createDistrict = exports.getDistrictById = exports.getDistrict = void 0;

var _District = _interopRequireDefault(require("../models/District"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getDistrict = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var districts;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _District["default"].find();

          case 2:
            districts = _context.sent;
            res.json(districts);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getDistrict(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getDistrict = getDistrict;

var getDistrictById = function getDistrictById(req, res) {
  res.json("Get by id district");
};

exports.getDistrictById = getDistrictById;

var createDistrict = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, name, region, province, latitude, longitude, altitude, imagesUrl, newDistrict, districtSaved;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, region = _req$body.region, province = _req$body.province, latitude = _req$body.latitude, longitude = _req$body.longitude, altitude = _req$body.altitude, imagesUrl = _req$body.imagesUrl;
            newDistrict = new _District["default"]({
              name: name,
              region: region,
              province: province,
              latitude: latitude,
              longitude: longitude,
              altitude: altitude,
              imagesUrl: imagesUrl
            });
            _context2.next = 4;
            return newDistrict.save();

          case 4:
            districtSaved = _context2.sent;
            res.status(201).json(districtSaved);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function createDistrict(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.createDistrict = createDistrict;

var updateDistrict = function updateDistrict(req, res) {};

exports.updateDistrict = updateDistrict;

var deleteDistrict = function deleteDistrict(req, res) {};

exports.deleteDistrict = deleteDistrict;