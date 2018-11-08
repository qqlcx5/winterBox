"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _create = _interopRequireDefault(require("../utils/create"));

var _routerLink = _interopRequireDefault(require("../mixins/router-link"));

var _default = (0, _create.default)({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "van-hairline",
      class: _vm.b(),
      on: {
        "click": _vm.onClick
      }
    }, [_c('icon', {
      class: [_vm.b('icon'), _vm.iconClass],
      attrs: {
        "info": _vm.info,
        "name": _vm.icon
      }
    }), _vm._t("default", [_vm._v(_vm._s(_vm.text))])], 2);
  },
  name: 'goods-action-mini-btn',
  mixins: [_routerLink.default],
  props: {
    text: String,
    info: [String, Number],
    icon: String,
    iconClass: String
  },
  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event);
      this.routerLink();
    }
  }
});

exports.default = _default;