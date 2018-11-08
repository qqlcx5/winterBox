import Vue from 'vue';
import deepAssign from '../utils/deep-assign';
import defaultMessages from './lang/zh-CN';
var proto = Vue.prototype;
var defaultLang = 'zh-CN';
var locale = {
  install: function install() {
    var _Vue$util$defineReact;

    if (proto.$vantLang) {
      return;
    }

    Vue.util.defineReactive(proto, '$vantLang', defaultLang);
    Vue.util.defineReactive(proto, '$vantMessages', (_Vue$util$defineReact = {}, _Vue$util$defineReact[defaultLang] = defaultMessages, _Vue$util$defineReact));
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

    deepAssign(proto.$vantMessages, messages);
  }
};
locale.install();
export default locale;