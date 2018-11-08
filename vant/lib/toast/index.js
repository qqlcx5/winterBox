"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _vue = _interopRequireDefault(require("vue"));

var _Toast = _interopRequireDefault(require("./Toast"));

var _utils = require("../utils");

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
  return (0, _utils.isObj)(message) ? message : {
    message: message
  };
};

var queue = [];
var singleton = true;
var currentOptions = (0, _extends2.default)({}, defaultOptions);

function createInstance() {
  /* istanbul ignore if */
  if (_utils.isServer) {
    return {};
  }

  if (!queue.length || !singleton) {
    var toast = new (_vue.default.extend(_Toast.default))({
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
  options = (0, _extends2.default)({}, currentOptions, parseOptions(options), {
    clear: function clear() {
      toast.value = false;

      if (!singleton && !_utils.isServer) {
        document.body.removeChild(toast.$el);
        toast.$destroy();
      }
    }
  });
  (0, _extends2.default)(toast, transformer(options));
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
    return Toast((0, _extends2.default)({
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
  (0, _extends2.default)(currentOptions, options);
};

Toast.resetDefaultOptions = function () {
  currentOptions = (0, _extends2.default)({}, defaultOptions);
};

Toast.allowMultiple = function (allow) {
  if (allow === void 0) {
    allow = true;
  }

  singleton = !allow;
};

Toast.install = function () {
  _vue.default.use(_Toast.default);
};

_vue.default.prototype.$toast = Toast;
var _default = Toast;
exports.default = _default;