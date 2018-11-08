"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _radio = _interopRequireDefault(require("../radio"));

var _radioGroup = _interopRequireDefault(require("../radio-group"));

var _create = _interopRequireDefault(require("../utils/create"));

var _default2 = (0, _create.default)({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b()
    }, [_c('radio-group', {
      attrs: {
        "value": _vm.value
      },
      on: {
        "input": function input($event) {
          _vm.$emit('input', $event);
        }
      }
    }, [_c('cell-group', _vm._l(_vm.list, function (item, index) {
      return _c('cell', {
        key: item.id,
        attrs: {
          "is-link": ""
        }
      }, [_c('radio', {
        attrs: {
          "name": item.id
        },
        on: {
          "click": function click($event) {
            _vm.$emit('select', item, index);
          }
        }
      }, [_c('div', {
        class: _vm.b('name')
      }, [_vm._v(_vm._s(item.name) + "，" + _vm._s(item.tel))])]), _c('icon', {
        class: _vm.b('edit'),
        attrs: {
          "slot": "right-icon",
          "name": "edit"
        },
        on: {
          "click": function click($event) {
            _vm.$emit('edit', item, index);
          }
        },
        slot: "right-icon"
      })], 1);
    }))], 1), _c('van-button', {
      class: _vm.b('add'),
      attrs: {
        "square": "",
        "size": "large",
        "type": "danger",
        "text": _vm.addText || _vm.$t('addText')
      },
      on: {
        "click": function click($event) {
          _vm.$emit('add');
        }
      }
    })], 1);
  },
  name: 'contact-list',
  components: {
    Radio: _radio.default,
    RadioGroup: _radioGroup.default
  },
  props: {
    value: {},
    addText: String,
    list: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  }
});

exports.default = _default2;