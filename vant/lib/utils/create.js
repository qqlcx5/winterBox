"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = _default;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _createBasic = _interopRequireDefault(require("./create-basic"));

var _icon = _interopRequireDefault(require("../icon"));

var _loading = _interopRequireDefault(require("../loading"));

var _cell = _interopRequireDefault(require("../cell"));

var _cellGroup = _interopRequireDefault(require("../cell-group"));

/**
 * Create a component with common options
 */
function _default(sfc) {
  sfc.components = (0, _extends2.default)(sfc.components || {}, {
    Icon: _icon.default,
    Loading: _loading.default,
    Cell: _cell.default,
    CellGroup: _cellGroup.default
  });
  return (0, _createBasic.default)(sfc);
}

;