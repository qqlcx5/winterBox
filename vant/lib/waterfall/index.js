"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _directive = _interopRequireDefault(require("./directive.js"));

_directive.default.install = function (Vue) {
  if (process.env.NODE_ENV !== 'production') {
    console.warn('[Vant] Waterfall is deprecated, please use List component instread');
  }

  Vue.directive('WaterfallLower', (0, _directive.default)('lower'));
  Vue.directive('WaterfallUpper', (0, _directive.default)('upper'));
};

var _default = _directive.default;
exports.default = _default;