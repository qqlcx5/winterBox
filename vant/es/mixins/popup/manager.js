import _extends from "@babel/runtime/helpers/esm/extends";
import Vue from 'vue';
import Modal from './Modal';
import context from './context';
var defaultConfig = {
  className: '',
  customStyle: {}
};
export default {
  open: function open(vm, config) {
    /* istanbul ignore next */
    if (!context.stack.some(function (item) {
      return item.vm === vm;
    })) {
      var el = vm.$el;
      var target = el && el.parentNode ? el.parentNode : document.body;
      context.stack.push({
        vm: vm,
        config: config,
        target: target
      });
      this.update();
    }

    ;
  },
  close: function close(vm) {
    var stack = context.stack;

    if (stack.length) {
      if (context.top.vm === vm) {
        stack.pop();
        this.update();
      } else {
        context.stack = stack.filter(function (item) {
          return item.vm !== vm;
        });
      }
    }
  },
  update: function update() {
    var modal = context.modal;

    if (!modal) {
      modal = new (Vue.extend(Modal))({
        el: document.createElement('div')
      });
      modal.$on('click', this.onClick);
      context.modal = modal;
    }

    if (modal.$el.parentNode) {
      modal.visible = false;
    }

    if (context.top) {
      var _context$top = context.top,
          target = _context$top.target,
          config = _context$top.config;
      target.appendChild(modal.$el);

      _extends(modal, _extends({}, defaultConfig, config, {
        visible: true
      }));
    }
  },
  // close popup when click modal && closeOnClickOverlay is true
  onClick: function onClick() {
    /* istanbul ignore else */
    if (context.top) {
      var vm = context.top.vm;
      vm.$emit('click-overlay');
      vm.closeOnClickOverlay && vm.$emit('input', false);
    }
  }
};