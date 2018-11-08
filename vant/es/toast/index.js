import _extends from "@babel/runtime/helpers/esm/extends";
import Vue from 'vue';
import VueToast from './Toast';
import { isObj, isServer } from '../utils';
var defaultOptions = {
  type: 'text',
  mask: false,
  message: '',
  value: true,
  duration: 3000,
  position: 'middle',
  loadingType: 'circular',
  forbidClick: false,
  overlayStyle: {}
};

var parseOptions = function parseOptions(message) {
  return isObj(message) ? message : {
    message: message
  };
};

var queue = [];
var singleton = true;

var currentOptions = _extends({}, defaultOptions);

function createInstance() {
  /* istanbul ignore if */
  if (isServer) {
    return {};
  }

  if (!queue.length || !singleton) {
    var toast = new (Vue.extend(VueToast))({
      el: document.createElement('div')
    });
    document.body.appendChild(toast.$el);
    queue.push(toast);
  }

  return queue[queue.length - 1];
}

; // transform toast options to popup props

function transformer(options) {
  options.overlay = options.mask;
  return options;
}

function Toast(options) {
  if (options === void 0) {
    options = {};
  }

  var toast = createInstance();
  options = _extends({}, currentOptions, parseOptions(options), {
    clear: function clear() {
      toast.value = false;

      if (!singleton && !isServer) {
        document.body.removeChild(toast.$el);
        toast.$destroy();
      }
    }
  });

  _extends(toast, transformer(options));

  clearTimeout(toast.timer);

  if (options.duration > 0) {
    toast.timer = setTimeout(function () {
      toast.clear();
    }, options.duration);
  }

  return toast;
}

;

var createMethod = function createMethod(type) {
  return function (options) {
    return Toast(_extends({
      type: type
    }, parseOptions(options)));
  };
};

['loading', 'success', 'fail'].forEach(function (method) {
  Toast[method] = createMethod(method);
});

Toast.clear = function (all) {
  if (queue.length) {
    if (all) {
      queue.forEach(function (toast) {
        toast.clear();
      });
      queue = [];
    } else if (singleton) {
      queue[0].clear();
    } else {
      queue.shift().clear();
    }
  }
};

Toast.setDefaultOptions = function (options) {
  _extends(currentOptions, options);
};

Toast.resetDefaultOptions = function () {
  currentOptions = _extends({}, defaultOptions);
};

Toast.allowMultiple = function (allow) {
  if (allow === void 0) {
    allow = true;
  }

  singleton = !allow;
};

Toast.install = function () {
  Vue.use(VueToast);
};

Vue.prototype.$toast = Toast;
export default Toast;