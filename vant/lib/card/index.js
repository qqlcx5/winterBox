"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _tag = _interopRequireDefault(require("../tag"));

var _create = _interopRequireDefault(require("../utils/create"));

var _default = (0, _create.default)({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b({
        center: _vm.centered
      })
    }, [_c('a', {
      class: _vm.b('thumb'),
      attrs: {
        "href": _vm.thumbLink
      }
    }, [_vm._t("thumb", [_c('img', {
      class: _vm.b('img'),
      attrs: {
        "src": _vm.thumb
      }
    })]), _vm.tag ? _c('van-tag', {
      class: _vm.b('tag'),
      attrs: {
        "mark": "",
        "type": "danger"
      }
    }, [_vm._v("\n      " + _vm._s(_vm.tag) + "\n    ")]) : _vm._e()], 2), _c('div', {
      class: _vm.b('content')
    }, [_c('div', {
      class: _vm.b('left')
    }, [_vm._t("title", [_vm.title ? _c('div', {
      class: _vm.b('title')
    }, [_vm._v(_vm._s(_vm.title))]) : _vm._e()]), _vm._t("desc", [_vm.desc ? _c('div', {
      class: [_vm.b('desc'), 'van-ellipsis']
    }, [_vm._v(_vm._s(_vm.desc))]) : _vm._e()]), _vm._t("tags")], 2), _c('div', {
      class: _vm.b('right')
    }, [_vm.isDef(_vm.price) ? _c('div', [_vm._v(_vm._s(_vm.currency) + " " + _vm._s(_vm.price))]) : _vm._e(), _vm.isDef(_vm.originPrice) ? _c('div', {
      class: _vm.b('origin-price')
    }, [_vm._v(_vm._s(_vm.currency) + " " + _vm._s(_vm.originPrice))]) : _vm._e(), _vm.isDef(_vm.num) ? _c('div', {
      class: _vm.b('num')
    }, [_vm._v("x " + _vm._s(_vm.num))]) : _vm._e()])]), _vm.$slots.footer ? _c('div', {
      class: _vm.b('footer')
    }, [_vm._t("footer")], 2) : _vm._e()]);
  },
  name: 'card',
  components: {
    VanTag: _tag.default
  },
  props: {
    tag: String,
    desc: String,
    thumb: String,
    title: String,
    centered: Boolean,
    num: [Number, String],
    price: [Number, String],
    originPrice: [Number, String],
    currency: {
      type: String,
      default: '¥'
    },
    thumbLink: {
      type: String,
      default: 'javascript:;'
    }
  }
});

exports.default = _default;