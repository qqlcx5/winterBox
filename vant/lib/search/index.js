"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _field = _interopRequireDefault(require("../field"));

var _create = _interopRequireDefault(require("../utils/create"));

var _default = (0, _create.default)({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b({
        'show-action': _vm.showAction
      }),
      style: {
        background: _vm.background
      }
    }, [_c('field', _vm._g(_vm._b({
      attrs: {
        "clearable": "",
        "type": "search",
        "value": _vm.value,
        "border": false,
        "left-icon": "search"
      }
    }, 'field', _vm.$attrs, false), _vm.listeners), [_vm._t("left-icon", null, {
      slot: "left-icon"
    })], 2), _vm.showAction ? _c('div', {
      class: _vm.b('action')
    }, [_vm._t("action", [_c('div', {
      on: {
        "click": _vm.onBack
      }
    }, [_vm._v(_vm._s(_vm.$t('cancel')))])])], 2) : _vm._e()], 1);
  },
  name: 'search',
  inheritAttrs: false,
  components: {
    Field: _field.default
  },
  props: {
    value: String,
    showAction: Boolean,
    background: {
      type: String,
      default: '#f2f2f2'
    }
  },
  computed: {
    listeners: function listeners() {
      return (0, _extends2.default)({}, this.$listeners, {
        input: this.onInput,
        keypress: this.onKeypress
      });
    }
  },
  methods: {
    onInput: function onInput(value) {
      this.$emit('input', value);
    },
    onKeypress: function onKeypress(event) {
      // press enter
      if (event.keyCode === 13) {
        event.preventDefault();
        this.$emit('search', this.value);
      }

      this.$emit('keypress', event);
    },
    onBack: function onBack() {
      this.$emit('input', '');
      this.$emit('cancel');
    }
  }
});

exports.default = _default;