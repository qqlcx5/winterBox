"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _vue = _interopRequireDefault(require("vue"));

var _Modal = _interopRequireDefault(require("./Modal"));

var _context = _interopRequireDefault(require("./context"));

var defaultConfig = {
  className: '',
  customStyle: {}
};
var _default = {
  open: function open(vm, config) {
    /* istanbul ignore next */
    if (!_context.default.stack.some(function (item) {
      return item.vm === vm;
    })) {
      var el = vm.$el;
      var target = el && el.parentNode ? el.parentNode : document.body;

      _context.default.stack.push({
        vm: vm,
        config: config,
        target: target
      });

      this.update();
    }

    ;
  },
  close: function close(vm) {
    var stack = _context.default.stack;

    if (stack.length) {
      if (_context.default.top.vm === vm) {
        stack.pop();
        this.update();
      } else {
        _context.default.stack = stack.filter(function (item) {
          return item.vm !== vm;
        });
      }
    }
  },
  update: function update() {
    var modal = _context.default.modal;

    if (!modal) {
      modal = new (_vue.default.extend(_Modal.default))({
        el: document.createElement('div')
      });
      modal.$on('click', this.onClick);
      _context.default.modal = modal;
    }

    if (modal.$el.parentNode) {
      modal.visible = false;
    }

    if (_context.default.top) {
      var _context$top = _context.default.top,
          target = _context$top.target,
          config = _context$top.config;
      target.appendChild(modal.$el);
      (0, _extends2.default)(modal, (0, _extends2.default)({}, defaultConfig, config, {
        visible: true
      }));
    }
  },
  // close popup when click modal && closeOnClickOverlay is true
  onClick: function onClick() {
    /* istanbul ignore else */
    if (_context.default.top) {
      var vm = _context.default.top.vm;
      vm.$emit('click-overlay');
      vm.closeOnClickOverlay && vm.$emit('input', false);
    }
  }
};
exports.default = _default;