"use strict";

exports.__esModule = true;
exports.default = void 0;

/**
 * find parent component by name
 */
var _default = {
  data: function data() {
    return {
      parent: null
    };
  },
  methods: {
    findParent: function findParent(name) {
      var parent = this.$parent;

      while (parent) {
        if (parent.$options.name === name) {
          this.parent = parent;
          break;
        }

        parent = parent.$parent;
      }
    }
  }
};
exports.default = _default;