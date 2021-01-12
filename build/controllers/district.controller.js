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

var getDistrictById = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var district;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _District["default"].findById(req.params.districtId);

          case 2:
            district = _context2.sent;
            res.status(200).json(district);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getDistrictById(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getDistrictById = getDistrictById;

var createDistrict = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body, name, region, province, latitude, longitude, altitude, imagesUrl, newDistrict, districtSaved;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
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
            _context3.next = 4;
            return newDistrict.save();

          case 4:
            districtSaved = _context3.sent;
            res.status(201).json(districtSaved);

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function createDistrict(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.createDistrict = createDistrict;

var updateDistrict = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var updateDistrict;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _District["default"].findByIdAndUpdate(req.params.districtId, req.body, {
              "new": true
            });

          case 2:
            updateDistrict = _context4.sent;
            res.status(200).json(updateDistrict);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function updateDistrict(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateDistrict = updateDistrict;

var deleteDistrict = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var districtId;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            districtId = req.params.districtId;
            _context5.next = 3;
            return _District["default"].findByIdAndDelete(districtId);

          case 3:
            res.status(204).json();

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deleteDistrict(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteDistrict = deleteDistrict;