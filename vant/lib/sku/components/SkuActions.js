"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _button = _interopRequireDefault(require("../../button"));

var _create = _interopRequireDefault(require("../../utils/create"));

var _default = (0, _create.default)({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b()
    }, [_vm.showAddCartBtn ? _c('van-button', {
      attrs: {
        "bottom-action": "",
        "text": "加入购物车"
      },
      on: {
        "click": function click($event) {
          _vm.skuEventBus.$emit('sku:addCart');
        }
      }
    }) : _vm._e(), _c('van-button', {
      attrs: {
        "type": "primary",
        "bottom-action": "",
        "text": _vm.buyText || '立即购买'
      },
      on: {
        "click": function click($event) {
          _vm.skuEventBus.$emit('sku:buy');
        }
      }
    })], 1);
  },
  name: 'sku-actions',
  components: {
    VanButton: _button.default
  },
  props: {
    buyText: String,
    skuEventBus: Object,
    showAddCartBtn: Boolean
  }
});

exports.default = _default;