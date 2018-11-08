"use strict";

exports.__esModule = true;
exports.default = void 0;

/**
 * add Vue-Router support
 */
var _default = {
  props: {
    url: String,
    replace: Boolean,
    to: [String, Object]
  },
  methods: {
    routerLink: function routerLink() {
      var to = this.to,
          url = this.url,
          $router = this.$router,
          replace = this.replace;

      if (to && $router) {
        $router[replace ? 'replace' : 'push'](to);
      } else if (url) {
        replace ? location.replace(url) : location.href = url;
      }
    }
  }
};
exports.default = _default;