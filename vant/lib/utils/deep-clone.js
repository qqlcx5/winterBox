"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = deepClone;

var _deepAssign = _interopRequireDefault(require("./deep-assign"));

function deepClone(obj) {
  if (Array.isArray(obj)) {
    return obj.map(function (item) {
      return deepClone(item);
    });
  } else if (typeof obj === 'object') {
    return (0, _deepAssign.default)({}, obj);
  }

  return obj;
}