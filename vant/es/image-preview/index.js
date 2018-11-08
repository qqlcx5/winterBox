import _extends from "@babel/runtime/helpers/esm/extends";
import Vue from 'vue';
import VueImagePreview from './ImagePreview';
import { isServer } from '../utils';
var instance;
var defaultConfig = {
  value: true,
  images: [],
  showIndex: true,
  showIndicators: false,
  startPosition: 0
};

var initInstance = function initInstance() {
  instance = new (Vue.extend(VueImagePreview))({
    el: document.createElement('div')
  });
  document.body.appendChild(instance.$el);
};

var ImagePreview = function ImagePreview(images, startPosition) {
  /* istanbul ignore if */
  if (isServer) {
    return;
  }

  if (!instance) {
    initInstance();
  }

  var options = Array.isArray(images) ? {
    images: images,
    startPosition: startPosition
  } : images;

  _extends(instance, _extends({}, defaultConfig, options));

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
  Vue.use(VueImagePreview);
};

export default ImagePreview;