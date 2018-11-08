"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _vue = _interopRequireDefault(require("vue"));

var _ImagePreview = _interopRequireDefault(require("./ImagePreview"));

var _utils = require("../utils");

var instance;
var defaultConfig = {
  value: true,
  images: [],
  showIndex: true,
  showIndicators: false,
  startPosition: 0
};

var initInstance = function initInstance() {
  instance = new (_vue.default.extend(_ImagePreview.default))({
    el: document.createElement('div')
  });
  document.body.appendChild(instance.$el);
};

var ImagePreview = function ImagePreview(images, startPosition) {
  /* istanbul ignore if */
  if (_utils.isServer) {
    return;
  }

  if (!instance) {
    initInstance();
  }

  var options = Array.isArray(images) ? {
    images: images,
    startPosition: startPosition
  } : images;
  (0, _extends2.default)(instance, (0, _extends2.default)({}, defaultConfig, options));
  instance.$on('input', function (show) {
    instance.value = show;

    if (!show) {
      instance.$off('input');
      options.onClose && options.onClose();
    }
  });
  return instance;
};

ImagePreview.install = function () {
  _vue.default.use(_ImagePreview.default);
};

var _default = ImagePreview;
exports.default = _default;