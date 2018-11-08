"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _createBasic = _interopRequireDefault(require("../utils/create-basic"));

var DEFAULT_COLOR = '#c9c9c9';

var _default = (0, _createBasic.default)({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b([_vm.type, _vm.colorType]),
      style: _vm.style
    }, [_c('span', {
      class: _vm.b('spinner', _vm.type)
    }, [_vm._l(_vm.type === 'spinner' ? 12 : 0, function (item, index) {
      return _c('i', {
        key: index
      });
    }), _vm.type === 'circular' ? _c('svg', {
      class: _vm.b('circular'),
      attrs: {
        "viewBox": "25 25 50 50"
      }
    }, [_c('circle', {
      attrs: {
        "cx": "50",
        "cy": "50",
        "r": "20",
        "fill": "none"
      }
    })]) : _vm._e()], 2)]);
  },
  name: 'loading',
  props: {
    size: String,
    type: {
      type: String,
      default: 'circular'
    },
    color: {
      type: String,
      default: DEFAULT_COLOR
    }
  },
  computed: {
    colorType: function colorType() {
      var color = this.color;
      return color === 'white' || color === 'black' ? color : '';
    },
    style: function style() {
      return {
        color: this.color === 'black' ? DEFAULT_COLOR : this.color,
        width: this.size,
        height: this.size
      };
    }
  }
});

exports.default = _default;