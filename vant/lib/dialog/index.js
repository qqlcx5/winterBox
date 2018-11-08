"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _vue = _interopRequireDefault(require("vue"));

var _Dialog = _interopRequireDefault(require("./Dialog"));

var _utils = require("../utils");

var instance;

var initInstance = function initInstance() {
  instance = new (_vue.default.extend(_Dialog.default))({
    el: document.createElement('div')
  });
  instance.$on('input', function (value) {
    instance.value = value;
  });
  document.body.appendChild(instance.$el);
};

var Dialog = function Dialog(options) {
  /* istanbul ignore if */
  if (_utils.isServer) {
    return Promise.resolve();
  }

  return new Promise(function (resolve, reject) {
    if (!instance) {
      initInstance();
    }

    (0, _extends2.default)(instance, (0, _extends2.default)({
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
  return Dialog((0, _extends2.default)({}, Dialog.currentOptions, options));
};

Dialog.confirm = function (options) {
  return Dialog((0, _extends2.default)({}, Dialog.currentOptions, {
    showCancelButton: true
  }, options));
};

Dialog.close = function () {
  if (instance) {
    instance.value = false;
  }
};

Dialog.setDefaultOptions = function (options) {
  (0, _extends2.default)(Dialog.currentOptions, options);
};

Dialog.resetDefaultOptions = function () {
  Dialog.currentOptions = (0, _extends2.default)({}, Dialog.defaultOptions);
};

Dialog.install = function () {
  _vue.default.use(_Dialog.default);
};

_vue.default.prototype.$dialog = Dialog;
Dialog.resetDefaultOptions();
var _default = Dialog;
exports.default = _default;