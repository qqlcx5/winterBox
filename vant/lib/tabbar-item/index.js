"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _info = _interopRequireDefault(require("../info"));

var _create = _interopRequireDefault(require("../utils/create"));

var _routerLink = _interopRequireDefault(require("../mixins/router-link"));

var _components;

var _default = (0, _create.default)({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b({
        active: _vm.active
      }),
      on: {
        "click": _vm.onClick
      }
    }, [_c('div', {
      class: _vm.b('icon', {
        dot: _vm.dot
      })
    }, [_vm._t("icon", [_vm.icon ? _c('icon', {
      attrs: {
        "name": _vm.icon
      }
    }) : _vm._e()], {
      active: _vm.active
    }), _c('van-info', {
      attrs: {
        "info": _vm.info
      }
    })], 2), _c('div', {
      class: _vm.b('text')
    }, [_vm._t("default", null, {
      active: _vm.active
    })], 2)]);
  },
  name: 'tabbar-item',
  components: (_components = {}, _components[_info.default.name] = _info.default, _components),
  mixins: [_routerLink.default],
  props: {
    icon: String,
    dot: Boolean,
    info: [String, Number]
  },
  data: function data() {
    return {
      active: false
    };
  },
  beforeCreate: function beforeCreate() {
    this.$parent.items.push(this);
  },
  destroyed: function destroyed() {
    this.$parent.items.splice(this.$parent.items.indexOf(this), 1);
  },
  methods: {
    onClick: function onClick(event) {
      this.$parent.onChange(this.$parent.items.indexOf(this));
      this.$emit('click', event);
      this.routerLink();
    }
  }
});

exports.default = _default;