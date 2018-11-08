"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = _default;

require("../locale");

var _bem = _interopRequireDefault(require("../mixins/bem"));

var _i18n = _interopRequireDefault(require("../mixins/i18n"));

var _ = require("./");

/**
 * Create a basic component with common options
 */
var install = function install(Vue) {
  Vue.component(this.name, this);
};

function _default(sfc) {
  sfc.name = 'van-' + sfc.name;
  sfc.install = sfc.install || install;
  sfc.mixins = sfc.mixins || [];
  sfc.mixins.push(_i18n.default, _bem.default);
  sfc.methods = sfc.methods || {};
  sfc.methods.isDef = _.isDef;
  return sfc;
}

;