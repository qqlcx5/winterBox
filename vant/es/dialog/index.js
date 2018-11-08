import _extends from "@babel/runtime/helpers/esm/extends";
import Vue from 'vue';
import VanDialog from './Dialog';
import { isServer } from '../utils';
var instance;

var initInstance = function initInstance() {
  instance = new (Vue.extend(VanDialog))({
    el: document.createElement('div')
  });
  instance.$on('input', function (value) {
    instance.value = value;
  });
  document.body.appendChild(instance.$el);
};

var Dialog = function Dialog(options) {
  /* istanbul ignore if */
  if (isServer) {
    return Promise.resolve();
  }

  return new Promise(function (resolve, reject) {
    if (!instance) {
      initInstance();
    }

    _extends(instance, _extends({
      resolve: resolve,
      reject: reject
    }, options));
  });
};

Dialog.defaultOptions = {
  value: true,
  title: '',
  message: '',
  overlay: true,
  className: '',
  lockScroll: true,
  beforeClose: null,
  confirmButtonText: '',
  cancelButtonText: '',
  showConfirmButton: true,
  showCancelButton: false,
  closeOnClickOverlay: false,
  callback: function callback(action) {
    instance[action === 'confirm' ? 'resolve' : 'reject'](action);
  }
};

Dialog.alert = function (options) {
  return Dialog(_extends({}, Dialog.currentOptions, options));
};

Dialog.confirm = function (options) {
  return Dialog(_extends({}, Dialog.currentOptions, {
    showCancelButton: true
  }, options));
};

Dialog.close = function () {
  if (instance) {
    instance.value = false;
  }
};

Dialog.setDefaultOptions = function (options) {
  _extends(Dialog.currentOptions, options);
};

Dialog.resetDefaultOptions = function () {
  Dialog.currentOptions = _extends({}, Dialog.defaultOptions);
};

Dialog.install = function () {
  Vue.use(VanDialog);
};

Vue.prototype.$dialog = Dialog;
Dialog.resetDefaultOptions();
export default Dialog;