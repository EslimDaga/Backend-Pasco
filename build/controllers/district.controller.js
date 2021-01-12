"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteDistrict = exports.updateDistrict = exports.createDistrict = exports.getDistrictById = exports.getDistrict = void 0;

var _District = _interopRequireDefault(require("../models/District"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getDistrict = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res) {
    var districts = yield _District.default.find();
    res.json(districts);
  });

  return function getDistrict(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getDistrict = getDistrict;

var getDistrictById = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (req, res) {
    var district = yield _District.default.findById(req.params.districtId);
    res.status(200).json(district);
  });

  return function getDistrictById(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getDistrictById = getDistrictById;

var createDistrict = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (req, res) {
    var {
      name,
      region,
      province,
      latitude,
      longitude,
      altitude,
      imagesUrl
    } = req.body;
    var newDistrict = new _District.default({
      name,
      region,
      province,
      latitude,
      longitude,
      altitude,
      imagesUrl
    });
    var districtSaved = yield newDistrict.save();
    res.status(201).json(districtSaved);
  });

  return function createDistrict(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.createDistrict = createDistrict;

var updateDistrict = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(function* (req, res) {
    var updateDistrict = yield _District.default.findByIdAndUpdate(req.params.districtId, req.body, {
      new: true
    });
    res.status(200).json(updateDistrict);
  });

  return function updateDistrict(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateDistrict = updateDistrict;

var deleteDistrict = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(function* (req, res) {
    var {
      districtId
    } = req.params;
    yield _District.default.findByIdAndDelete(districtId);
    res.status(204).json();
  });

  return function deleteDistrict(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteDistrict = deleteDistrict;