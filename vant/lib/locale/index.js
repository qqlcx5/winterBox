"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _deepAssign = _interopRequireDefault(require("../utils/deep-assign"));

var _zhCN = _interopRequireDefault(require("./lang/zh-CN"));

var proto = _vue.default.prototype;
var defaultLang = 'zh-CN';
var locale = {
  install: function install() {
    var _Vue$util$defineReact;

    if (proto.$vantLang) {
      return;
    }

    _vue.default.util.defineReactive(proto, '$vantLang', defaultLang);

    _vue.default.util.defineReactive(proto, '$vantMessages', (_Vue$util$defineReact = {}, _Vue$util$defineReact[defaultLang] = _zhCN.default, _Vue$util$defineReact));
  },
  use: function use(lang, messages) {
    var _this$add;

    proto.$vantLang = lang;
    this.add((_this$add = {}, _this$add[lang] = messages, _this$add));
  },
  add: function add(messages) {
    if (messages === void 0) {
      messages = {};
    }

    (0, _deepAssign.default)(proto.$vantMessages, messages);
  }
};
locale.install();
var _default = locale;
exports.default = _default;