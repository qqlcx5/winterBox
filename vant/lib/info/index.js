"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _createBasic = _interopRequireDefault(require("../utils/create-basic"));

var _default = (0, _createBasic.default)({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _vm.isDef(_vm.info) ? _c('div', {
      class: _vm.b()
    }, [_vm._v(_vm._s(_vm.info))]) : _vm._e();
  },
  name: 'info',
  props: {
    info: [String, Number]
  }
});

exports.default = _default;