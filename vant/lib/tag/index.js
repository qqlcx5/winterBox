"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _create = _interopRequireDefault(require("../utils/create"));

var _color = require("../utils/color");

var DEFAULT_COLOR = '#999';
var COLOR_MAP = {
  danger: _color.RED,
  primary: _color.BLUE,
  success: _color.GREEN
};

var _default = (0, _create.default)({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('span', {
      class: [_vm.b((_obj = {
        mark: _vm.mark,
        plain: _vm.plain,
        round: _vm.round
      }, _obj[_vm.size] = _vm.size, _obj)), {
        'van-hairline--surround': _vm.plain
      }],
      style: _vm.style
    }, [_vm._t("default")], 2);

    var _obj;
  },
  name: 'tag',
  props: {
    size: String,
    type: String,
    mark: Boolean,
    color: String,
    plain: Boolean,
    round: Boolean
  },
  computed: {
    style: function style() {
      var _ref;

      var color = this.color || COLOR_MAP[this.type] || DEFAULT_COLOR;
      var key = this.plain ? 'color' : 'backgroundColor';
      return _ref = {}, _ref[key] = color, _ref;
    }
  }
});

exports.default = _default;