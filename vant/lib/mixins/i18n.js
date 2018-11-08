"use strict";

exports.__esModule = true;
exports.default = void 0;

var _utils = require("../utils");

// component mixin
var _default = {
  computed: {
    $t: function $t() {
      var name = this.$options.name;
      var prefix = name ? (0, _utils.camelize)(name) + '.' : '';

      if (!this.$vantMessages) {
        if (process.env.NODE_ENV !== 'production') {
          console.error('[Vant] Locale not correctly registered');
        }

        return function () {
          return '';
        };
      }

      var messages = this.$vantMessages[this.$vantLang];
      return function (path) {
        var message = (0, _utils.get)(messages, prefix + path) || (0, _utils.get)(messages, path);

        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        return typeof message === 'function' ? message.apply(null, args) : message;
      };
    }
  }
};
exports.default = _default;