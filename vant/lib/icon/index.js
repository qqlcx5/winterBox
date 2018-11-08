"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _info = _interopRequireDefault(require("../info"));

var _createBasic = _interopRequireDefault(require("../utils/create-basic"));

var _components;

var _default = (0, _createBasic.default)({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('i', _vm._g({
      class: [_vm.classPrefix, _vm.classPrefix + "-" + _vm.name],
      style: _vm.style
    }, _vm.$listeners), [_vm._t("default"), _c('van-info', {
      attrs: {
        "info": _vm.info
      }
    })], 2);
  },
  name: 'icon',
  components: (_components = {}, _components[_info.default.name] = _info.default, _components),
  props: {
    name: String,
    info: [String, Number],
    color: String,
    size: String,
    classPrefix: {
      type: String,
      default: 'van-icon'
    }
  },
  computed: {
    style: function style() {
      return {
        color: this.color,
        fontSize: this.size
      };
    }
  }
});

exports.default = _default;