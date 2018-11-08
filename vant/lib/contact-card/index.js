"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _create = _interopRequireDefault(require("../utils/create"));

var _default = (0, _create.default)({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('cell', {
      class: _vm.b([_vm.type]),
      attrs: {
        "center": "",
        "border": false,
        "is-link": _vm.editable,
        "icon": _vm.type === 'edit' ? 'contact' : 'add2'
      },
      on: {
        "click": _vm.onClick
      }
    }, [_vm.type === 'add' ? [_vm._v(_vm._s(_vm.addText || _vm.$t('addText')))] : [_c('div', [_vm._v(_vm._s(_vm.$t('name')) + "：" + _vm._s(_vm.name))]), _c('div', [_vm._v(_vm._s(_vm.$t('tel')) + "：" + _vm._s(_vm.tel))])]], 2);
  },
  name: 'contact-card',
  props: {
    tel: String,
    name: String,
    addText: String,
    editable: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: 'add'
    }
  },
  methods: {
    onClick: function onClick(event) {
      if (this.editable) {
        this.$emit('click', event);
      }
    }
  }
});

exports.default = _default;