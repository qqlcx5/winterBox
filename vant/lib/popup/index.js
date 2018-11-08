"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _create = _interopRequireDefault(require("../utils/create"));

var _popup = _interopRequireDefault(require("../mixins/popup"));

var _default = (0, _create.default)({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('transition', {
      attrs: {
        "name": _vm.currentTransition
      }
    }, [_vm.shouldRender ? _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.value,
        expression: "value"
      }],
      class: _vm.b((_obj = {}, _obj[_vm.position] = _vm.position, _obj))
    }, [_vm._t("default")], 2) : _vm._e()]);

    var _obj;
  },
  name: 'popup',
  mixins: [_popup.default],
  props: {
    transition: String,
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    position: {
      type: String,
      default: ''
    }
  },
  computed: {
    currentTransition: function currentTransition() {
      return this.transition || (this.position === '' ? 'van-fade' : "popup-slide-" + this.position);
    }
  }
});

exports.default = _default;