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

    return _c('div', {
      class: [_vm.b(), {
        'van-hairline--top-bottom': _vm.border
      }]
    }, [_vm._t("default")], 2);
  },
  name: 'cell-group',
  props: {
    border: {
      type: Boolean,
      default: true
    }
  }
});

exports.default = _default;